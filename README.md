# Fyle Health Challenge Tracker

This project is part of the Front-End Developer Internship Assignment at Fyle and is deployed on Vercel.

- **GitHub Repository:** [Fyle Health Challenge Tracker](https://github.com/ishitaraina1807/Health-challenge-tracker)
- **Live Demo:** [Vercel Deployment]()

## Features
- **Add Workouts:** Click the `+ Add Workout` button to open a modal and log your workout.
- **Workout Progress Charts:** View workout trends using charts accessible via the `show_chart` icon in the left toolbar.
- **Persistent Data:** Workouts are stored in local storage for seamless usage.
- **Fully Functional:** Works flawlessly both locally and on Vercel.

## Project Preview
![Workout Tracker](https://github.com/ishitaraina1807/Health-challenge-tracker/blob/main/Screenshot%202025-02-01%20153955.png)
![Add Workout Modal](https://github.com/ishitaraina1807/Health-challenge-tracker/blob/main/Screenshot%202025-02-01%20153942.png)
![Workout Progress Charts](https://github.com/ishitaraina1807/Health-challenge-tracker/blob/main/Screenshot%202025-02-01%20154013.png)

## Installation Guide
Follow these steps to set up the project locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/knight7080/fyle-health-challenge-tracker.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd health-challenge-tracker
   ```
3. **Install Dependencies:**
   ```bash
   npm install
   ```
4. **Run the Development Server:**
   ```bash
   ng serve
   ```
5. Open `http://localhost:4200/` in your browser to access the app.

## Code Coverage
To check the code coverage, run:
```bash
ng test --code-coverage
```

### Coverage Report
Unit tests are included for:
- **Component:** `user-charts.component.ts`
- **Service:** `update-workout.service.spec.ts`

---

The project meets all requirements, ensuring a smooth and reliable user experience.

