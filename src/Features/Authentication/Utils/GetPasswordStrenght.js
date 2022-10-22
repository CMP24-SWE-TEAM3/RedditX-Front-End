let GetPasswordStrength = (str) => {
  const uniqueCount = new Set(str).size;
    console.log(str);
  console.log(uniqueCount);
  console.log(typeof(uniqueCount));

  return uniqueCount;
};

export default GetPasswordStrength;
