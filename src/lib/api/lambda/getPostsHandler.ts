import { DynamoDB } from 'aws-sdk';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

// Initialize DynamoDB client
const dynamoDb = new DynamoDB.DocumentClient();
const POSTS_TABLE = process.env.POSTS_TABLE || 'TheMoneyBro-Posts';

/**
 * Lambda handler for getting posts from DynamoDB
 */
export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    // Set default CORS headers
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
    };

    // Extract query parameters
    const queryParams = event.queryStringParameters || {};
    const category = queryParams.category;
    const tag = queryParams.tag;
    const slug = queryParams.slug;
    const limit = queryParams.limit ? parseInt(queryParams.limit) : 10;
    const lastEvaluatedKey = queryParams.lastEvaluatedKey 
      ? JSON.parse(decodeURIComponent(queryParams.lastEvaluatedKey)) 
      : undefined;

    // Determine query parameters based on filters
    if (slug) {
      // Get a single post by slug
      const params: DynamoDB.DocumentClient.GetItemInput = {
        TableName: POSTS_TABLE,
        Key: { slug },
      };

      const result = await dynamoDb.get(params).promise();
      
      if (!result.Item) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ message: 'Post not found' }),
        };
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(result.Item),
      };
    } else if (category) {
      // Query posts by category using a GSI
      const params: DynamoDB.DocumentClient.QueryInput = {
        TableName: POSTS_TABLE,
        IndexName: 'CategoryIndex',
        KeyConditionExpression: 'category = :category',
        ExpressionAttributeValues: {
          ':category': category,
        },
        Limit: limit,
        ScanIndexForward: false, // sort in descending order (newest first)
        ExclusiveStartKey: lastEvaluatedKey,
      };

      const result = await dynamoDb.query(params).promise();
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          posts: result.Items,
          lastEvaluatedKey: result.LastEvaluatedKey 
            ? encodeURIComponent(JSON.stringify(result.LastEvaluatedKey))
            : null,
        }),
      };
    } else if (tag) {
      // Query posts by tag (requires a secondary index or scan with filter)
      const params: DynamoDB.DocumentClient.ScanInput = {
        TableName: POSTS_TABLE,
        FilterExpression: 'contains(tags, :tag)',
        ExpressionAttributeValues: {
          ':tag': tag,
        },
        Limit: limit,
        ExclusiveStartKey: lastEvaluatedKey,
      };

      const result = await dynamoDb.scan(params).promise();
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          posts: result.Items,
          lastEvaluatedKey: result.LastEvaluatedKey 
            ? encodeURIComponent(JSON.stringify(result.LastEvaluatedKey))
            : null,
        }),
      };
    } else {
      // Get all posts or with pagination
      const params: DynamoDB.DocumentClient.ScanInput = {
        TableName: POSTS_TABLE,
        Limit: limit,
        ExclusiveStartKey: lastEvaluatedKey,
      };

      const result = await dynamoDb.scan(params).promise();
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          posts: result.Items,
          lastEvaluatedKey: result.LastEvaluatedKey 
            ? encodeURIComponent(JSON.stringify(result.LastEvaluatedKey))
            : null,
        }),
      };
    }
  } catch (error) {
    console.error('Error processing request:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
}; 