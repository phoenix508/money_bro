import AWS from 'aws-sdk';

// Initialize the AWS SDK with your credentials
const initDynamoDB = () => {
  // Configure AWS SDK (these would typically come from environment variables)
  AWS.config.update({
    region: process.env.AWS_REGION || 'us-east-1',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  return new AWS.DynamoDB.DocumentClient();
};

// Get DynamoDB client instance
export const dynamoClient = initDynamoDB();

// Helper functions for common DynamoDB operations
export const getItem = async (tableName: string, key: Record<string, any>) => {
  const params = {
    TableName: tableName,
    Key: key,
  };

  try {
    const result = await dynamoClient.get(params).promise();
    return result.Item;
  } catch (error) {
    console.error('Error retrieving item from DynamoDB:', error);
    throw error;
  }
};

export const putItem = async (tableName: string, item: Record<string, any>) => {
  const params = {
    TableName: tableName,
    Item: item,
  };

  try {
    await dynamoClient.put(params).promise();
    return item;
  } catch (error) {
    console.error('Error putting item in DynamoDB:', error);
    throw error;
  }
};

export const queryItems = async (
  tableName: string, 
  keyConditionExpression: string,
  expressionAttributeValues: Record<string, any>,
  indexName?: string
) => {
  const params: AWS.DynamoDB.DocumentClient.QueryInput = {
    TableName: tableName,
    KeyConditionExpression: keyConditionExpression,
    ExpressionAttributeValues: expressionAttributeValues,
  };

  if (indexName) {
    params.IndexName = indexName;
  }

  try {
    const result = await dynamoClient.query(params).promise();
    return result.Items;
  } catch (error) {
    console.error('Error querying items from DynamoDB:', error);
    throw error;
  }
};

export const scanItems = async (
  tableName: string,
  filterExpression?: string,
  expressionAttributeValues?: Record<string, any>
) => {
  const params: AWS.DynamoDB.DocumentClient.ScanInput = {
    TableName: tableName,
  };

  if (filterExpression) {
    params.FilterExpression = filterExpression;
    params.ExpressionAttributeValues = expressionAttributeValues;
  }

  try {
    const result = await dynamoClient.scan(params).promise();
    return result.Items;
  } catch (error) {
    console.error('Error scanning items from DynamoDB:', error);
    throw error;
  }
}; 