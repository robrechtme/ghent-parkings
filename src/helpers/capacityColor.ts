const getCapacityColor = (ratio: number) => {
  if (ratio >= 0.5) {
    return 'green';
  } if (ratio >= 0.1) {
    return 'orange';
  }
  return 'red';
};

export default getCapacityColor;