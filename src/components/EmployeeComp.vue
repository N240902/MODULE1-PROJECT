<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">Employee Information</h2>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Employee Details</h5>
        
        <!-- Employee Information -->
        <div class="row">
          <div class="col-md-6">
            <p><strong>Name:</strong> {{ employee.name }}</p>
            <p><strong>Email:</strong> {{ employee.email }}</p>
            <p><strong>Phone:</strong> {{ employee.phone }}</p>
            <p><strong>Position:</strong> {{ employee.position }}</p>
            <p><strong>Department:</strong> {{ employee.department }}</p>
          </div>
          <div class="col-md-6">
            <p><strong>Address:</strong> {{ employee.address }}</p>
            <p><strong>Date of Birth:</strong> {{ employee.dob }}</p>
            <p><strong>Hire Date:</strong> {{ employee.hireDate }}</p>
            <p><strong>Salary:</strong> ${{ employee.salary.toLocaleString() }}</p>
          </div>
        </div>

        <!-- Edit button -->
        <button class="btn btn-primary" @click="editEmployee">Edit Information</button>
      </div>
    </div>

    <!-- Edit Form (Conditionally shown if isEditing is true) -->
    <div v-if="isEditing" class="card mt-4">
      <div class="card-body">
        <h5 class="card-title">Edit Employee Details</h5>
        <form @submit.prevent="saveEmployeeInfo">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input v-model="employee.name" type="text" class="form-control" id="name" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="employee.email" type="email" class="form-control" id="email" required />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Phone</label>
            <input v-model="employee.phone" type="text" class="form-control" id="phone" required />
          </div>
          <div class="mb-3">
            <label for="position" class="form-label">Position</label>
            <input v-model="employee.position" type="text" class="form-control" id="position" required />
          </div>
          <div class="mb-3">
            <label for="department" class="form-label">Department</label>
            <input v-model="employee.department" type="text" class="form-control" id="department" required />
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">Address</label>
            <input v-model="employee.address" type="text" class="form-control" id="address" required />
          </div>
          <div class="mb-3">
            <label for="dob" class="form-label">Date of Birth</label>
            <input v-model="employee.dob" type="date" class="form-control" id="dob" required />
          </div>
          <div class="mb-3">
            <label for="hireDate" class="form-label">Hire Date</label>
            <input v-model="employee.hireDate" type="date" class="form-control" id="hireDate" required />
          </div>
          <div class="mb-3">
            <label for="salary" class="form-label">Salary</label>
            <input v-model="employee.salary" type="number" class="form-control" id="salary" required />
          </div>

          <button type="submit" class="btn btn-success">Save</button>
          <button type="button" class="btn btn-secondary" @click="cancelEdit">Cancel</button>
        </form>
      </div>
    </div>

    <!-- Go Back Button -->
    <div class="mt-4">
      <button class="btn btn-info" @click="goBackToHome">Go Back to Home</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeComp',
  data() {
    return {
      // Dummy data for an employee
      employee: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        position: 'Software Engineer',
        department: 'IT',
        address: '123 Main St, Springfield, IL',
        dob: '1985-08-15',
        hireDate: '2015-06-01',
        salary: 75000,
      },
      isEditing: false, // Whether the form is in edit mode
    }
  },
  methods: {
    // Trigger edit mode
    editEmployee() {
      this.isEditing = true;
    },

    // Save edited information
    saveEmployeeInfo() {
      this.isEditing = false;
      // Here you can handle any backend API calls to save the updated data
      alert('Employee information saved successfully!');
    },

    // Cancel editing
    cancelEdit() {
      this.isEditing = false;
      // Optionally, reset to the original data if necessary
    },

    // Go back to the home page
    goBackToHome() {
      this.$router.push('/home'); // Navigate to the home page
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 20px;
}

h5.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

button {
  margin-top: 15px;
}

form .form-label {
  font-weight: bold;
}

input.form-control {
  border-radius: 4px;
}

input[type="date"] {
  width: 100%;
}

.mb-3 {
  margin-bottom: 1.5rem;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-info {
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-info:hover {
  background-color: #138496;
  border-color: #117a8b;
}
</style>
