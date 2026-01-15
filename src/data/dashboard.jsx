const employees = [
  {
    _id: "EMP1001",
    name: "Amit Sharma",
    email: "amit.sharma@thodusnstand.com",
    role: "Frontend Developer",
    department: "Engineering",
    experience: 1.2,
    salary: 32000,
    status: "Probation",
    dateOfJoining: "2024-02-12"
  },
  {
    _id: "EMP1002",
    name: "Rohit Singh",
    email: "rohit.singh@thodusnstand.com",
    role: "Backend Developer",
    department: "Engineering",
    experience: 3.4,
    salary: 52000,
    status: "Confirmed",
    dateOfJoining: "2022-08-19"
  },
  {
    _id: "EMP1003",
    name: "Priya Verma",
    email: "priya.verma@thodusnstand.com",
    role: "QA Engineer",
    department: "Quality Assurance",
    experience: 2.1,
    salary: 38000,
    status: "Probation",
    dateOfJoining: "2023-11-03"
  },
  {
    _id: "EMP1004",
    name: "Neha Gupta",
    email: "neha.gupta@thodusnstand.com",
    role: "HR Executive",
    department: "Human Resources",
    experience: 4.8,
    salary: 60000,
    status: "Confirmed",
    dateOfJoining: "2021-06-15"
  },
  {
    _id: "EMP1005",
    name: "Karan Mehta",
    email: "karan.mehta@thodusnstand.com",
    role: "MERN Stack Developer",
    department: "Engineering",
    experience: 0.9,
    salary: 28000,
    status: "Probation",
    dateOfJoining: "2024-05-01"
  },

  /* ================= EMP 6 – EMP 195 ================= */

  {
    _id: "EMP1196",
    name: "Vikas Patel",
    email: "vikas.patel@thodusnstand.com",
    role: "DevOps Engineer",
    department: "Operations",
    experience: 5.1,
    salary: 75000,
    status: "Confirmed",
    dateOfJoining: "2020-09-10"
  },
  {
    _id: "EMP1197",
    name: "Sneha Kapoor",
    email: "sneha.kapoor@thodusnstand.com",
    role: "UI/UX Designer",
    department: "Design",
    experience: 3.2,
    salary: 48000,
    status: "Confirmed",
    dateOfJoining: "2022-03-27"
  },
  {
    _id: "EMP1198",
    name: "Ankit Yadav",
    email: "ankit.yadav@thodusnstand.com",
    role: "Frontend Developer",
    department: "Engineering",
    experience: 1.7,
    salary: 35000,
    status: "Probation",
    dateOfJoining: "2024-01-09"
  },
  {
    _id: "EMP1199",
    name: "Riya Chawla",
    email: "riya.chawla@thodusnstand.com",
    role: "QA Engineer",
    department: "Quality Assurance",
    experience: 2.9,
    salary: 41000,
    status: "Confirmed",
    dateOfJoining: "2023-04-14"
  },
  {
    _id: "EMP1200",
    name: "Manish Tiwari",
    email: "manish.tiwari@thodusnstand.com",
    role: "Backend Developer",
    department: "Engineering",
    experience: 6.0,
    salary: 82000,
    status: "Confirmed",
    dateOfJoining: "2019-12-02"
  },
  {
    _id: "EMP1001",
    name: "Amit Sharma",
    email: "amit.sharma@thodusnstand.com",
    role: "Frontend Developer",
    department: "Engineering",
    experience: 1.2,
    salary: 32000,
    status: "Probation",
    dateOfJoining: "2024-02-12"
  },
  {
    _id: "EMP1002",
    name: "Rohit Singh",
    email: "rohit.singh@thodusnstand.com",
    role: "Backend Developer",
    department: "Engineering",
    experience: 3.4,
    salary: 52000,
    status: "Confirmed",
    dateOfJoining: "2022-08-19"
  },
  {
    _id: "EMP1003",
    name: "Priya Verma",
    email: "priya.verma@thodusnstand.com",
    role: "QA Engineer",
    department: "Quality Assurance",
    experience: 2.1,
    salary: 38000,
    status: "Probation",
    dateOfJoining: "2023-11-03"
  },
  {
    _id: "EMP1004",
    name: "Neha Gupta",
    email: "neha.gupta@thodusnstand.com",
    role: "HR Executive",
    department: "Human Resources",
    experience: 4.8,
    salary: 60000,
    status: "Confirmed",
    dateOfJoining: "2021-06-15"
  },
  {
    _id: "EMP1005",
    name: "Karan Mehta",
    email: "karan.mehta@thodusnstand.com",
    role: "MERN Stack Developer",
    department: "Engineering",
    experience: 0.9,
    salary: 28000,
    status: "Probation",
    dateOfJoining: "2024-05-01"
  },

  /* ================= EMP 6 – EMP 195 ================= */

  {
    _id: "EMP1196",
    name: "Vikas Patel",
    email: "vikas.patel@thodusnstand.com",
    role: "DevOps Engineer",
    department: "Operations",
    experience: 5.1,
    salary: 75000,
    status: "Confirmed",
    dateOfJoining: "2020-09-10"
  },
  {
    _id: "EMP1197",
    name: "Sneha Kapoor",
    email: "sneha.kapoor@thodusnstand.com",
    role: "UI/UX Designer",
    department: "Design",
    experience: 3.2,
    salary: 48000,
    status: "Confirmed",
    dateOfJoining: "2022-03-27"
  },
  {
    _id: "EMP1198",
    name: "Ankit Yadav",
    email: "ankit.yadav@thodusnstand.com",
    role: "Frontend Developer",
    department: "Engineering",
    experience: 1.7,
    salary: 35000,
    status: "Probation",
    dateOfJoining: "2024-01-09"
  },
  {
    _id: "EMP1199",
    name: "Riya Chawla",
    email: "riya.chawla@thodusnstand.com",
    role: "QA Engineer",
    department: "Quality Assurance",
    experience: 2.9,
    salary: 41000,
    status: "Confirmed",
    dateOfJoining: "2023-04-14"
  },
  {
    _id: "EMP1200",
    name: "Manish Tiwari",
    email: "manish.tiwari@thodusnstand.com",
    role: "Backend Developer",
    department: "Engineering",
    experience: 6.0,
    salary: 82000,
    status: "Confirmed",
    dateOfJoining: "2019-12-02"
  },
  {
    _id: "EMP1001",
    name: "Amit Sharma",
    email: "amit.sharma@thodusnstand.com",
    role: "Frontend Developer",
    department: "Engineering",
    experience: 1.2,
    salary: 32000,
    status: "Probation",
    dateOfJoining: "2024-02-12"
  },
  {
    _id: "EMP1002",
    name: "Rohit Singh",
    email: "rohit.singh@thodusnstand.com",
    role: "Backend Developer",
    department: "Engineering",
    experience: 3.4,
    salary: 52000,
    status: "Confirmed",
    dateOfJoining: "2022-08-19"
  },
  {
    _id: "EMP1003",
    name: "Priya Verma",
    email: "priya.verma@thodusnstand.com",
    role: "QA Engineer",
    department: "Quality Assurance",
    experience: 2.1,
    salary: 38000,
    status: "Probation",
    dateOfJoining: "2023-11-03"
  },
  {
    _id: "EMP1004",
    name: "Neha Gupta",
    email: "neha.gupta@thodusnstand.com",
    role: "HR Executive",
    department: "Human Resources",
    experience: 4.8,
    salary: 60000,
    status: "Confirmed",
    dateOfJoining: "2021-06-15"
  },
  {
    _id: "EMP1005",
    name: "Karan Mehta",
    email: "karan.mehta@thodusnstand.com",
    role: "MERN Stack Developer",
    department: "Engineering",
    experience: 0.9,
    salary: 28000,
    status: "Probation",
    dateOfJoining: "2024-05-01"
  },

  /* ================= EMP 6 – EMP 195 ================= */

  {
    _id: "EMP1196",
    name: "Vikas Patel",
    email: "vikas.patel@thodusnstand.com",
    role: "DevOps Engineer",
    department: "Operations",
    experience: 5.1,
    salary: 75000,
    status: "Confirmed",
    dateOfJoining: "2020-09-10"
  },
  {
    _id: "EMP1197",
    name: "Sneha Kapoor",
    email: "sneha.kapoor@thodusnstand.com",
    role: "UI/UX Designer",
    department: "Design",
    experience: 3.2,
    salary: 48000,
    status: "Confirmed",
    dateOfJoining: "2022-03-27"
  },
  {
    _id: "EMP1198",
    name: "Ankit Yadav",
    email: "ankit.yadav@thodusnstand.com",
    role: "Frontend Developer",
    department: "Engineering",
    experience: 1.7,
    salary: 35000,
    status: "Probation",
    dateOfJoining: "2024-01-09"
  },
  {
    _id: "EMP1199",
    name: "Riya Chawla",
    email: "riya.chawla@thodusnstand.com",
    role: "QA Engineer",
    department: "Quality Assurance",
    experience: 2.9,
    salary: 41000,
    status: "Confirmed",
    dateOfJoining: "2023-04-14"
  },
  {
    _id: "EMP1200",
    name: "Manish Tiwari",
    email: "manish.tiwari@thodusnstand.com",
    role: "Backend Developer",
    department: "Engineering",
    experience: 6.0,
    salary: 82000,
    status: "Confirmed",
    dateOfJoining: "2019-12-02"
  },
  {
    _id: "EMP1001",
    name: "Amit Sharma",
    email: "amit.sharma@thodusnstand.com",
    role: "Frontend Developer",
    department: "Engineering",
    experience: 1.2,
    salary: 32000,
    status: "Probation",
    dateOfJoining: "2024-02-12"
  },
  {
    _id: "EMP1002",
    name: "Rohit Singh",
    email: "rohit.singh@thodusnstand.com",
    role: "Backend Developer",
    department: "Engineering",
    experience: 3.4,
    salary: 52000,
    status: "Confirmed",
    dateOfJoining: "2022-08-19"
  },
  {
    _id: "EMP1003",
    name: "Priya Verma",
    email: "priya.verma@thodusnstand.com",
    role: "QA Engineer",
    department: "Quality Assurance",
    experience: 2.1,
    salary: 38000,
    status: "Probation",
    dateOfJoining: "2023-11-03"
  },
  {
    _id: "EMP1004",
    name: "Neha Gupta",
    email: "neha.gupta@thodusnstand.com",
    role: "HR Executive",
    department: "Human Resources",
    experience: 4.8,
    salary: 60000,
    status: "Confirmed",
    dateOfJoining: "2021-06-15"
  },
  {
    _id: "EMP1005",
    name: "Karan Mehta",
    email: "karan.mehta@thodusnstand.com",
    role: "MERN Stack Developer",
    department: "Engineering",
    experience: 0.9,
    salary: 28000,
    status: "Probation",
    dateOfJoining: "2024-05-01"
  },

  /* ================= EMP 6 – EMP 195 ================= */

  {
    _id: "EMP1196",
    name: "Vikas Patel",
    email: "vikas.patel@thodusnstand.com",
    role: "DevOps Engineer",
    department: "Operations",
    experience: 5.1,
    salary: 75000,
    status: "Confirmed",
    dateOfJoining: "2020-09-10"
  },
  {
    _id: "EMP1197",
    name: "Sneha Kapoor",
    email: "sneha.kapoor@thodusnstand.com",
    role: "UI/UX Designer",
    department: "Design",
    experience: 3.2,
    salary: 48000,
    status: "Confirmed",
    dateOfJoining: "2022-03-27"
  },
  {
    _id: "EMP1198",
    name: "Ankit Yadav",
    email: "ankit.yadav@thodusnstand.com",
    role: "Frontend Developer",
    department: "Engineering",
    experience: 1.7,
    salary: 35000,
    status: "Probation",
    dateOfJoining: "2024-01-09"
  },
  {
    _id: "EMP1199",
    name: "Riya Chawla",
    email: "riya.chawla@thodusnstand.com",
    role: "QA Engineer",
    department: "Quality Assurance",
    experience: 2.9,
    salary: 41000,
    status: "Confirmed",
    dateOfJoining: "2023-04-14"
  },
  {
    _id: "EMP1200",
    name: "Manish Tiwari",
    email: "manish.tiwari@thodusnstand.com",
    role: "Backend Developer",
    department: "Engineering",
    experience: 6.0,
    salary: 82000,
    status: "Confirmed",
    dateOfJoining: "2019-12-02"
  },
  {
    _id: "EMP1001",
    name: "Amit Sharma",
    email: "amit.sharma@thodusnstand.com",
    role: "Frontend Developer",
    department: "Engineering",
    experience: 1.2,
    salary: 32000,
    status: "Probation",
    dateOfJoining: "2024-02-12"
  },
  {
    _id: "EMP1002",
    name: "Rohit Singh",
    email: "rohit.singh@thodusnstand.com",
    role: "Backend Developer",
    department: "Engineering",
    experience: 3.4,
    salary: 52000,
    status: "Confirmed",
    dateOfJoining: "2022-08-19"
  },
  {
    _id: "EMP1003",
    name: "Priya Verma",
    email: "priya.verma@thodusnstand.com",
    role: "QA Engineer",
    department: "Quality Assurance",
    experience: 2.1,
    salary: 38000,
    status: "Probation",
    dateOfJoining: "2023-11-03"
  },
  {
    _id: "EMP1004",
    name: "Neha Gupta",
    email: "neha.gupta@thodusnstand.com",
    role: "HR Executive",
    department: "Human Resources",
    experience: 4.8,
    salary: 60000,
    status: "Confirmed",
    dateOfJoining: "2021-06-15"
  },
  {
    _id: "EMP1005",
    name: "Karan Mehta",
    email: "karan.mehta@thodusnstand.com",
    role: "MERN Stack Developer",
    department: "Engineering",
    experience: 0.9,
    salary: 28000,
    status: "Probation",
    dateOfJoining: "2024-05-01"
  },

  /* ================= EMP 6 – EMP 195 ================= */

  {
    _id: "EMP1196",
    name: "Vikas Patel",
    email: "vikas.patel@thodusnstand.com",
    role: "DevOps Engineer",
    department: "Operations",
    experience: 5.1,
    salary: 75000,
    status: "Confirmed",
    dateOfJoining: "2020-09-10"
  },
  {
    _id: "EMP1197",
    name: "Sneha Kapoor",
    email: "sneha.kapoor@thodusnstand.com",
    role: "UI/UX Designer",
    department: "Design",
    experience: 3.2,
    salary: 48000,
    status: "Confirmed",
    dateOfJoining: "2022-03-27"
  },
  {
    _id: "EMP1198",
    name: "Ankit Yadav",
    email: "ankit.yadav@thodusnstand.com",
    role: "Frontend Developer",
    department: "Engineering",
    experience: 1.7,
    salary: 35000,
    status: "Probation",
    dateOfJoining: "2024-01-09"
  },
  {
    _id: "EMP1199",
    name: "Riya Chawla",
    email: "riya.chawla@thodusnstand.com",
    role: "QA Engineer",
    department: "Quality Assurance",
    experience: 2.9,
    salary: 41000,
    status: "Confirmed",
    dateOfJoining: "2023-04-14"
  },
  {
    _id: "EMP1200",
    name: "Manish Tiwari",
    email: "manish.tiwari@thodusnstand.com",
    role: "Backend Developer",
    department: "Engineering",
    experience: 6.0,
    salary: 82000,
    status: "Confirmed",
    dateOfJoining: "2019-12-02"
  }
];

export default employees;
