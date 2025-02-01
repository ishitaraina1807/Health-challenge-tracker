# Fyle Health Challenge Tracker

This project is part of the Front-End Developer Internship Assignment at Fyle and is deployed on Vercel.

- **GitHub Repository:** [Fyle Health Challenge Tracker](https://github.com/knight7080/fyle-health-challenge-tracker.git)
- **Live Demo:** [Vercel Deployment](https://fyle-health-challenge-tracker.vercel.app/)

## Features
- **Add Workouts:** Click the `+ Add Workout` button to open a modal and log your workout.
- **Workout Progress Charts:** View workout trends using charts accessible via the `show_chart` icon in the left toolbar.
- **Persistent Data:** Workouts are stored in local storage for seamless usage.
- **Fully Functional:** Works flawlessly both locally and on Vercel.

## Project Preview
![Workout Tracker](https://github.com/user-attachments/assets/453f46cd-d9c7-4fdc-bf3a-1cd14d74bd46)
![Add Workout Modal](https://github.com/user-attachments/assets/46473cea-081e-4081-b4f5-d4455be84694)
![Workout Progress Charts](https://github.com/user-attachments/assets/56a74c65-3849-4e56-91c3-8ae5577bcb57)

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

![Code Coverage Report](https://github.com/user-attachments/assets/1073f2d9-4840-475b-8143-086023bac696)
![Unit Test Results](https://github.com/user-attachments/assets/10452dfc-6975-49c4-85a6-938ec55d4559)
![Coverage Summary](https://github.com/user-attachments/assets/a8ba3527-97e9-44fd-a828-94e03c731aa6)

---

The project meets all requirements, ensuring a smooth and reliable user experience.

