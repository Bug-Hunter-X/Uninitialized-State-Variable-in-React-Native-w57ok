import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Simulate an asynchronous operation that sets the state
    setTimeout(() => {
      setCount(10);
      setIsInitialized(true);
    }, 1000);
  }, []);

  if (!isInitialized) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>Count: {count}</Text>
    </View>
  );
};

export default MyComponent;