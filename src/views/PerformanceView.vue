<template>
    <div class="productivity-metrics">
      <h1>Employee Productivity Metrics</h1>
  
      <div v-if="employeeMetrics.length > 0">
        <div v-for="employee in employeeMetrics" :key="employee.employeeId" class="employee-card">
          <h3>{{ employee.name }}</h3>
  
          <ul>
            <li>
              <strong>Work Output:</strong> {{ employee.workOutput }} tasks
            </li>
            <li>
              <strong>Efficiency:</strong> {{ calculateEfficiency(employee.workOutput, employee.hoursWorked) }} tasks per hour
            </li>
            <li>
              <strong>Quality of Work:</strong> {{ employee.qualityOfWork }}%
            </li>
            <li>
              <strong>Time Management:</strong> {{ calculateTimeManagement(employee.hoursWorked, employee.deadlinesMet) }}% on-time tasks
            </li>
          </ul>
        </div>
      </div>
      <div v-else>
        <p>No productivity data available.</p>
      </div>
      <!-- Go Back Button -->
      <button @click="goBack" class="btn btn-primary mt-3">Go Back to Dashboard</button>
    </div>
</template>
  
<script>
  export default {
    name: 'ProductivityMetrics',
    data() {
      return {
        employeeMetrics: [
          {
            employeeId: 1,
            name: 'Sibongile Nkosi',
            workOutput: 45, // Number of tasks completed
            hoursWorked: 160, // Total hours worked in the period
            qualityOfWork: 98, // Percentage of tasks completed without errors
            deadlinesMet: 45 // Tasks completed on or before deadlines
          },
          {
            employeeId: 2,
            name: 'Lungile Moyo',
            workOutput: 40,
            hoursWorked: 150,
            qualityOfWork: 95,
            deadlinesMet: 40
          },
          {
            employeeId: 3,
            name: 'Thabo Molefe',
            workOutput: 35,
            hoursWorked: 170,
            qualityOfWork: 93,
            deadlinesMet: 30
          },
          {
            employeeId: 4,
            name: 'Keshav Naidoo',
            workOutput: 50,
            hoursWorked: 165,
            qualityOfWork: 97,
            deadlinesMet: 50
          },
          {
            employeeId: 5,
            name: 'Zanele Khumalo',
            workOutput: 38,
            hoursWorked: 158,
            qualityOfWork: 90,
            deadlinesMet: 35
          },
          {
            employeeId: 6,
            name: 'Sipho Zulu',
            workOutput: 42,
            hoursWorked: 160,
            qualityOfWork: 96,
            deadlinesMet: 40
          },
          {
            employeeId: 7,
            name: 'Naledi Moeketsi',
            workOutput: 48,
            hoursWorked: 165,
            qualityOfWork: 98,
            deadlinesMet: 48
          },
          {
            employeeId: 8,
            name: 'Farai Gumbo',
            workOutput: 37,
            hoursWorked: 150,
            qualityOfWork: 92,
            deadlinesMet: 35
          },
          {
            employeeId: 9,
            name: 'Karabo Dlamini',
            workOutput: 43,
            hoursWorked: 160,
            qualityOfWork: 97,
            deadlinesMet: 43
          },
          {
            employeeId: 10,
            name: 'Fatima Patel',
            workOutput: 45,
            hoursWorked: 165,
            qualityOfWork: 98,
            deadlinesMet: 45
          }
        ]
      };
    },
    methods: {
      // Calculate efficiency (tasks per hour worked)
      calculateEfficiency(workOutput, hoursWorked) {
        return (workOutput / hoursWorked).toFixed(2);
      },
      // Calculate time management (percentage of tasks completed on time)
      calculateTimeManagement(hoursWorked, deadlinesMet) {
        return ((deadlinesMet / hoursWorked) * 100).toFixed(2);
      },
      goBack() {
        this.$router.push('/home');
      }
    }
  };
</script>
  
<style scoped>
  .productivity-metrics {
    margin-top: 20px;
    padding: 20px;
  }
  
  .employee-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    background-color: #f9f9f9;
    margin-bottom: 20px;
  }
  
  .employee-card ul {
    list-style-type: none;
    padding: 0;
  }
  
  .employee-card li {
    margin-bottom: 10px;
  }
  
  .employee-card h3 {
    margin-bottom: 10px;
  }
</style>
  