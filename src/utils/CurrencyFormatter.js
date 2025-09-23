const formatCurrency = (num) => {
  if (typeof num !== 'number') return '';
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
};

export default formatCurrency;
