import { useEffect, useState } from 'react';

const useLatestVersionNumber = () => {
  const [versionNumber, setVersionNumber] = useState();

  useEffect(() => {
    fetch('https://api.github.com/repos/CodeEditApp/CodeEdit/releases/latest')
      .then((res) => res.json())
      .then((data) => {
        setVersionNumber(data.name)
      })
  }, [])

  return versionNumber ?? 'Loading...';
};

export default useLatestVersionNumber;
