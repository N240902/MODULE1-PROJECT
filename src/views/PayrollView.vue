<template>
  <div class="container">
    <h1>Payroll Information</h1>

    <!-- Payroll Data Table -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Hours Worked</th>
          <th>Leave Deductions</th>
          <th>Final Salary (R)</th>
          <th>Hourly Pay (R)</th>
          <th>Annual Pay (R)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="payroll in payrollData" :key="payroll.employeeId">
          <td>{{ payroll.employeeId }}</td>
          <td>{{ payroll.hoursWorked }}</td>
          <td>{{ payroll.leaveDeductions }}</td>
          <td>{{ formatSalary(payroll.finalSalary) }}</td>
          <td>{{ formatSalary(calculateHourlyPay(payroll)) }}</td>
          <td>{{ formatSalary(calculateAnnualPay(payroll)) }}</td>
          <td>
            <button @click="generatePaySlip(payroll)" class="btn btn-primary">Generate Pay Slip</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Go Back Button -->
    <button @click="goBack" class="btn btn-primary mt-3">Go Back to Dashboard</button>
  </div>
</template>

<script>
// Import jsPDF and jsPDF autoTable plugin
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export default {
  name: 'PayrollView',
  data() {
    return {
      payrollData: [
        { employeeId: 1, hoursWorked: 160, leaveDeductions: 8, finalSalary: 69500 },
        { employeeId: 2, hoursWorked: 150, leaveDeductions: 10, finalSalary: 79000 },
        { employeeId: 3, hoursWorked: 170, leaveDeductions: 4, finalSalary: 54800 },
        { employeeId: 4, hoursWorked: 165, leaveDeductions: 6, finalSalary: 59700 },
        { employeeId: 5, hoursWorked: 158, leaveDeductions: 5, finalSalary: 57850 },
        { employeeId: 6, hoursWorked: 168, leaveDeductions: 2, finalSalary: 64800 },
        { employeeId: 7, hoursWorked: 175, leaveDeductions: 3, finalSalary: 71800 },
        { employeeId: 8, hoursWorked: 160, leaveDeductions: 0, finalSalary: 56000 },
        { employeeId: 9, hoursWorked: 155, leaveDeductions: 5, finalSalary: 61500 },
        { employeeId: 10, hoursWorked: 162, leaveDeductions: 4, finalSalary: 57750 }
      ]
    };
  },
  methods: {
    // Format salary with commas
    formatSalary(salary) {
      return salary.toLocaleString();
    },

    // Calculate Hourly Pay
    calculateHourlyPay(payroll) {
      return payroll.finalSalary / payroll.hoursWorked; // Calculate hourly pay
    },

    // Calculate Annual Pay
    calculateAnnualPay(payroll) {
      return payroll.finalSalary * 12; // Calculate annual pay
    },
     // the following code, we got it from ChatGBT and an AI languages through an ethical consultation or questioning
    // Generate PaySlip PDF
    generatePaySlip(payroll) {
      const { employeeId, hoursWorked, leaveDeductions, finalSalary } = payroll;
      const hourlySalary = this.calculateHourlyPay(payroll);
      const annualSalary = this.calculateAnnualPay(payroll);

      // Create a new jsPDF instance
      const doc = new jsPDF();

      // Add title
      doc.setFontSize(18);
      doc.text('Pay Slip', 14, 20);

      // Add Table for Payroll Information
      const tableData = [
        ['Description', 'Amount'],
        ['Employee ID', employeeId],
        ['Hours Worked', hoursWorked],
        ['Leave Deductions', leaveDeductions],
        ['Final Salary (R)', `R${this.formatSalary(finalSalary)}`],
        ['Hourly Salary (R)', `R${this.formatSalary(hourlySalary)}`],
        ['Annual Salary (R)', `R${this.formatSalary(annualSalary)}`]
      ];

      // Start the table at position 30 (after the title)
      doc.autoTable({
        startY: 30,
        head: tableData.slice(0, 1), // Header row
        body: tableData.slice(1),    // Data rows
        theme: 'grid',
        styles: {
          fontSize: 10,
          cellPadding: 5,
          halign: 'center'
        },
        margin: { left: 20, right: 20 }
      });

      // Add Footer
      const currentDate = new Date().toLocaleDateString();
      doc.text('ModernTech Solutions', 14, doc.internal.pageSize.height - 20);
      doc.text('Date: ' + currentDate, 140, doc.internal.pageSize.height - 20);

      // Save the document as a PDF file
      doc.save(`payroll_${employeeId}_pay_slip.pdf`);
    },

    // Go back to dashboard
    goBack() {
      this.$router.push('/home');
    }
  }
};
</script>
