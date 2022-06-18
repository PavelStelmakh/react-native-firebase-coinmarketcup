import EncryptedStorage from 'react-native-encrypted-storage';

export const useSecureStorage = () => {
  const setItem = (key, value) =>
    EncryptedStorage.setItem(key, JSON.stringify(value)).catch(console.error);

  const getItem = key =>
    EncryptedStorage.getItem(key).then(JSON.parse).catch(console.error);

  const removeItem = key =>
    EncryptedStorage.removeItem(key).catch(console.error);

  const clear = () => EncryptedStorage.clear().catch(console.error);

  return {
    setItem,
    getItem,
    removeItem,
    clear,
  };
};
