const getNumberValue = num => isNaN(num) ? 0 : Number(num); 

calculateEmi = () => {
  const principal = getNumberValue(document.getElementById("principal").value);
  const interest = getNumberValue(document.getElementById("interest").value);
  const tenure = getNumberValue(document.getElementById("tenure").value);
  const roi = (1 + interest) ** tenure;
  const emi = principal * interest * (roi / (roi - 1));
  console.log(roi, emi)
  document.getElementById("result").innerText = emi.toFixed(2);
};
// document.onclick=calculateEmi;
