export default function createEmployeesObject(departmentName, employees) {
  const employeesCard = { [`${departmentName}`]: employees };
  return employeesCard;
}
