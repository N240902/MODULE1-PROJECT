<template>
  <div class="container">
    <h1>Time Off & Attendance Information</h1>
    <div v-for="employee in attendanceAndLeave" :key="employee.employeeId" class="employee-section">
      <h3>{{ employee.name }} (Employee ID: {{ employee.employeeId }})</h3>

      <!-- Attendance Table -->
      <h4>Attendance</h4>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="attendance in employee.attendance" :key="attendance.date">
            <td>{{ attendance.date }}</td>
            <td>{{ attendance.status }}</td>
          </tr>
        </tbody>
      </table>

      <!-- Leave Requests Table -->
      <h4>Leave Requests</h4>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="leave in employee.leaveRequests" :key="leave.date">
            <td>{{ leave.date }}</td>
            <td>{{ leave.reason }}</td>
            <td :class="getLeaveStatusClass(leave.status)">
              {{ leave.status }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Go Back Button -->
    <button @click="goBack" class="btn btn-primary mt-3">Go Back to Dashboard</button>
  </div>
</template>

<script>
export default {
  name: 'TimeOffView',
  data() {
    return {
      attendanceAndLeave: [
        {
          employeeId: 1,
          name: 'Sibongile Nkosi',
          attendance: [
            { date: '2024-11-25', status: 'Present' },
            { date: '2024-11-26', status: 'Absent' },
            { date: '2024-11-27', status: 'Present' },
            { date: '2024-11-28', status: 'Present' },
            { date: '2024-11-29', status: 'Present' }
          ],
          leaveRequests: [
            { date: '2024-11-22', reason: 'Sick Leave', status: 'Approved' },
            { date: '2024-12-01', reason: 'Personal', status: 'Pending' }
          ]
        },
        {
          employeeId: 2,
          name: 'Lungile Moyo',
          attendance: [
            { date: '2024-11-25', status: 'Present' },
            { date: '2024-11-26', status: 'Present' },
            { date: '2024-11-27', status: 'Absent' },
            { date: '2024-11-28', status: 'Present' },
            { date: '2024-11-29', status: 'Present' }
          ],
          leaveRequests: [
            { date: '2024-11-15', reason: 'Family Responsibility', status: 'Denied' },
            { date: '2024-12-02', reason: 'Vacation', status: 'Approved' }
          ]
        },
        {
          employeeId: 3,
          name: 'Thabo Molefe',
          attendance: [
            { date: '2024-11-25', status: 'Present' },
            { date: '2024-11-26', status: 'Present' },
            { date: '2024-11-27', status: 'Present' },
            { date: '2024-11-28', status: 'Absent' },
            { date: '2024-11-29', status: 'Present' }
          ],
          leaveRequests: [
            { date: '2024-11-10', reason: 'Medical Appointment', status: 'Approved' },
            { date: '2024-12-05', reason: 'Personal', status: 'Pending' }
          ]
        },
        {
          employeeId: 4,
          name: 'Keshav Naidoo',
          attendance: [
            { date: '2024-11-25', status: 'Absent' },
            { date: '2024-11-26', status: 'Present' },
            { date: '2024-11-27', status: 'Present' },
            { date: '2024-11-28', status: 'Present' },
            { date: '2024-11-29', status: 'Present' }
          ],
          leaveRequests: [
            { date: '2024-11-20', reason: 'Bereavement', status: 'Approved' }
          ]
        },
        {
          employeeId: 5,
          name: 'Zanele Khumalo',
          attendance: [
            { date: '2024-11-25', status: 'Present' },
            { date: '2024-11-26', status: 'Present' },
            { date: '2024-11-27', status: 'Absent' },
            { date: '2024-11-28', status: 'Present' },
            { date: '2024-11-29', status: 'Present' }
          ],
          leaveRequests: [
            { date: '2024-12-01', reason: 'Childcare', status: 'Pending' }
          ]
        },
        {
          employeeId: 6,
          name: 'Sipho Zulu',
          attendance: [
            { date: '2024-11-25', status: 'Present' },
            { date: '2024-11-26', status: 'Present' },
            { date: '2024-11-27', status: 'Absent' },
            { date: '2024-11-28', status: 'Present' },
            { date: '2024-11-29', status: 'Present' }
          ],
          leaveRequests: [
            { date: '2024-11-18', reason: 'Sick Leave', status: 'Approved' }
          ]
        },
        {
          employeeId: 7,
          name: 'Naledi Moeketsi',
          attendance: [
            { date: '2024-11-25', status: 'Present' },
            { date: '2024-11-26', status: 'Present' },
            { date: '2024-11-27', status: 'Present' },
            { date: '2024-11-28', status: 'Absent' },
            { date: '2024-11-29', status: 'Present' }
          ],
          leaveRequests: [
            { date: '2024-11-22', reason: 'Vacation', status: 'Pending' }
          ]
        },
        {
          employeeId: 8,
          name: 'Farai Gumbo',
          attendance: [
            { date: '2024-11-25', status: 'Present' },
            { date: '2024-11-26', status: 'Absent' },
            { date: '2024-11-27', status: 'Present' },
            { date: '2024-11-28', status: 'Present' },
            { date: '2024-11-29', status: 'Present' }
          ],
          leaveRequests: [
            { date: '2024-12-02', reason: 'Medical Appointment', status: 'Approved' }
          ]
        },
        {
          employeeId: 9,
          name: 'Karabo Dlamini',
          attendance: [
            { date: '2024-11-25', status: 'Present' },
            { date: '2024-11-26', status: 'Present' },
            { date: '2024-11-27', status: 'Present' },
            { date: '2024-11-28', status: 'Absent' },
            { date: '2024-11-29', status: 'Present' }
          ],
          leaveRequests: [
            { date: '2024-11-19', reason: 'Childcare', status: 'Denied' }
          ]
        },
        {
          employeeId: 10,
          name: 'Fatima Patel',
          attendance: [
            { date: '2024-11-25', status: 'Present' },
            { date: '2024-11-26', status: 'Present' },
            { date: '2024-11-27', status: 'Absent' },
            { date: '2024-11-28', status: 'Present' },
            { date: '2024-11-29', status: 'Present' }
          ],
          leaveRequests: [
            { date: '2024-12-03', reason: 'Vacation', status: 'Pending' }
          ]
        }
      ]
    };
  },
  methods: {
    getLeaveStatusClass(status) {
      switch (status) {
        case 'Approved':
          return 'text-success';
        case 'Denied':
          return 'text-danger';
        case 'Pending':
          return 'text-warning';
        default:
          return '';
      }

    },
    getLeaveStatusColor(status) {
      switch (status) {
        case 'Approved':
          return 'green';
        case 'Denied':
          return 'red';
        case 'Pending':
          return 'yellow';
        default:
          return '';
      }
    },
    goBack() {
      this.$router.push('/home'); // Navigate to the dashboard page
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.employee-section {
  margin-bottom: 30px;
}

.table {
  width: 100%;
  margin-top: 10px;
}

.text-success {
  color : green;
}
</style>