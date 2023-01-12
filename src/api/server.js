import axios from 'axios';

export default axios.create({
  baseURL: 'https://mmuat.qhrm.io',
  withCredentials: true,
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ5dWdAZ21haWwuY29tIiwianRpIjoiMDIzOGNhZmYtMzBlNS00MDczLWFhZmMtNzliY2JhNDVkMTJlIiwiaWF0IjoxNjY5MTIwMTQ3LCJlSWQiOiIyMDMiLCJjSWQiOiIzIiwidUlkIjoiMTEiLCJlbWFpbCI6Inl1Z0BnbWFpbC5jb20iLCJuYmYiOjE2NjkxMjAxNDYsImV4cCI6MTY2OTEyMDQ0NiwiaXNzIjoiaHR0cHM6Ly9tbXVhdC5xaHJtLmlvLyIsImF1ZCI6Imh0dHBzOi8vbW11YXQucWhybS5pby8ifQ.Ke4Xmswul1ZYvkzccRPMcOrB9YqpT3oLLrYP96VF87A',
  },
});
