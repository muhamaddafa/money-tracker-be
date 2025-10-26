import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 500, // virtual users
  duration: "60s", // test duration
};

let startTime = new Date().getTime();

export default function () {
  const res = http.get("http://localhost:8080/api/categories");
  
  check(res, {
    "status is 200": (r) => r.status === 200,
    "response time < 500ms": (r) => r.timings.duration < 500,
  });
}

export function handleSummary(data) {
  const endTime = new Date().getTime();
  const durationInSeconds = (endTime - startTime) / 1000;
  const totalRequests = data.metrics.iterations.values.count;
  const rps = totalRequests / durationInSeconds;

  console.log(`Requests per second: ${rps.toFixed(2)}`);
}