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

        <!-- Edit Button -->
        <button @click="editEmployee(employee)" class="btn btn-warning">Edit</button>
      </div>
    </div>
    <div v-else>
      <p>No productivity data available.</p>
    </div>

    <!-- Edit Employee Modal / Form -->
    <div v-if="editingEmployee" class="modal fade show" tabindex="-1" style="display: block;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Employee Information</h5>
            <button type="button" class="close" @click="closeModal">&times;</button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="saveEmployee">
              <div class="form-group">
                <label for="employeeName">Name:</label>
                <input type="text" id="employeeName" v-model="editingEmployee.name" class="form-control" required />
              </div>
              <div class="form-group">
                <label for="employeeWorkOutput">Work Output:</label>
                <input type="number" id="employeeWorkOutput" v-model="editingEmployee.workOutput" class="form-control" required />
              </div>
              <div class="form-group">
                <label for="employeeHoursWorked">Hours Worked:</label>
                <input type="number" id="employeeHoursWorked" v-model="editingEmployee.hoursWorked" class="form-control" required />
              </div>
              <div class="form-group">
                <label for="employeeQualityOfWork">Quality of Work (%):</label>
                <input type="number" id="employeeQualityOfWork" v-model="editingEmployee.qualityOfWork" class="form-control" required />
              </div>
              <div class="form-group">
                <label for="employeeDeadlinesMet">Deadlines Met:</label>
                <input type="number" id="employeeDeadlinesMet" v-model="editingEmployee.deadlinesMet" class="form-control" required />
              </div>
              <button type="submit" class="btn btn-primary mt-3">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
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
          workOutput: 45,
          hoursWorked: 160,
          qualityOfWork: 98,
          deadlinesMet: 45
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
      ],
      editingEmployee: null // Stores the employee being edited
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
    // Start editing an employee's information
    editEmployee(employee) {
      this.editingEmployee = { ...employee }; // Clone the employee data for editing
    },
    // Save the updated employee data
    saveEmployee() {
      const index = this.employeeMetrics.findIndex(emp => emp.employeeId === this.editingEmployee.employeeId);
      if (index !== -1) {
        this.employeeMetrics.splice(index, 1, this.editingEmployee); // Replace the old employee data
        this.closeModal(); // Close the modal after saving
      }
    },
    // Close the editing modal
    closeModal() {
      this.editingEmployee = null; // Reset the editing employee
    },
    // Go back to the dashboard
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

.modal-dialog {
  max-width: 500px;
}

.modal-header {
  background-color: #f7f7f7;
}
</style>


