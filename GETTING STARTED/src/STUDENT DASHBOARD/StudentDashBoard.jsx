import { useState } from "react";

export const StudentDashBoard = () => {
  const [activeView, setActiveView] = useState("overview");

  const studentData = {
    stats: {
      average: 88,
      course: 3,
      studyHours: "45h",
      assignment: 12,
    },
    courses: [
      {
        name: "react fundamentals",
        progress: 75,
        teacher: "Sarah wilson",
        nextLesson: "components & props",
      },

      {
        name: "advanced javascript",
        progress: 45,
        teacher: "Mike johnson",
        nextLesson: "Async/await",
      },

      {
        name: "UI/UX Design",
        progress: 90,
        teacher: "Emily chen",
        nextLesson: "color theory",
      },
    ],

    assignments: [
      {
        title: "build a todo app",
        course: "react fundamental",
        status: "pending",
        date: "2026-10-24",
      },
      {
        title: "API integration",
        course: " advanced Javascript",
        status: "completed",
        date: "2026-10-16",
      },

      {
        title: "Design system",
        course: "UI/UX Design",
        status: "in-progress",
        date: "2026-10-28",
      },
    ],
    announcements: [
      {
        title: "new course available",
        description: "check-out our new typescript course!",
        time: "2h ago",
      },

      {
        title: "maintenance notice",
        description: "platform updates scheduled for tonight",
        time: "5h ago",
      },
    ],
  };

  //state management
  return (
    // page container
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-red-100 px-4 py-5">
      <main className="mx-auto w-full max-w-5xl space-y-4">
        {/* header section */}
        <header className="flex flex-col items-start gap-4 rounded-2xl bg-white p-4 shadow-md transition-shadow hover:shadow-lg sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-orange-600">
              Student dashboard
            </p>
            <h1 className="text-2xl font-semibold text-gray-700">
              Welcome back, Student
            </h1>
            <p className="text-gray-400 text-sm">
              Here's what's happening with your courses today
            </p>
          </div>
          {/* profile section */}
          <div className="flex items-center gap-3">
            {/* Notification Bell Container */}
            <button
              type="button"
              aria-label="Notifications"
              className="relative grid h-10 w-10 place-items-center rounded-full bg-orange-50 text-lg transition-colors hover:bg-orange-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              <span aria-hidden="true">🔔</span>
              {/* Notification Dot */}
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-red-500"></span>
            </button>

            {/* User Avatar */}
            <span
              aria-label="Student profile"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 font-medium text-white"
            >
              S
            </span>
          </div>
        </header>

        <nav
          aria-label="Dashboard views"
          className="flex gap-2 overflow-x-auto rounded-2xl bg-white/70 p-2 shadow-sm"
        >
          {[
            ["overview", "Overview"],
            ["courses", "Courses"],
            ["assignments", "Assignments"],
            ["announcements", "Announcements"],
          ].map(([view, label]) => (
            <button
              key={view}
              type="button"
              aria-current={activeView === view ? "page" : undefined}
              onClick={() => setActiveView(view)}
              className={`shrink-0 rounded-xl px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 ${
                activeView === view
                  ? "bg-orange-500 text-white shadow-sm"
                  : "text-gray-600 hover:bg-orange-50 hover:text-orange-700"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* statistics */}
        {activeView === "overview" && (
        <section
          aria-label="Student statistics"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Average grade card */}
          <div className="flex flex-1 items-center gap-3 rounded-2xl bg-white p-4 shadow-md">
            <span className="text-3xl ml-2">📊</span>
            <div>
              <h2 className="text-gray-400">Average grade</h2>
              <h2 className="text-2xl font-medium">
                {" "}
                {studentData.stats.average}%{" "}
              </h2>
            </div>
          </div>
          {/* Courses card */}
          <div className="flex flex-1 items-center gap-3 rounded-2xl bg-white p-4 shadow-md">
            <span className="text-3xl ml-2">📚</span>
            <div>
              <h2 className="text-gray-400">Courses</h2>
              <h2 className="text-2xl font-medium">
                {" "}
                {studentData.stats.course}{" "}
              </h2>
            </div>
          </div>
          {/* Study hours card */}
          <div className="flex flex-1 items-center gap-3 rounded-2xl bg-white p-4 shadow-md">
            <span className="text-3xl ml-2">⏲️</span>
            <div>
              <h2 className="text-gray-400">Study Hours</h2>
              <h2 className="text-2xl font-medium">
                {" "}
                {studentData.stats.studyHours}{" "}
              </h2>
            </div>
          </div>

          {/* Assignment card */}
          <div className="flex flex-1 items-center gap-3 rounded-2xl bg-white p-4 shadow-md">
            <span className="text-3xl ml-2"> ✍️</span>
            <div>
              <h2 className="text-gray-400">Assignments</h2>
              <h2 className="text-2xl font-medium">
                {" "}
                {studentData.stats.assignment}{" "}
              </h2>
            </div>
          </div>

        </section>
        )}

        {(activeView === "overview" || activeView === "courses") && (
        <section aria-labelledby="courses-heading" className="space-y-4">
          <div>
            <h2
              id="courses-heading"
              className="text-xl font-bold text-gray-800"
            >
              My courses
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Keep going — you’re making great progress.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {studentData.courses.map((course) => (
              <article
                key={course.name}
                className="rounded-2xl bg-white p-5 shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold capitalize text-gray-800">
                    {course.name}
                  </h3>
                  <span className="shrink-0 rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">
                    {course.progress}%
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Instructor: {course.teacher}
                </p>
                <div className="mt-4">
                  <div
                    role="progressbar"
                    aria-label={`${course.name} progress`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={course.progress}
                    className="h-2 overflow-hidden rounded-full bg-gray-100"
                  >
                    <div
                      className="h-full rounded-full bg-linear-to-r from-cyan-500 to-indigo-600"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  <span className="font-medium text-gray-700">Next lesson:</span>{" "}
                  {course.nextLesson}
                </p>
              </article>
            ))}
          </div>
        </section>
        )}

        <div
          className={`grid grid-cols-1 gap-6 ${
            activeView === "overview" ? "lg:grid-cols-2" : ""
          }`}
        >
          {(activeView === "overview" || activeView === "assignments") && (
          <section aria-labelledby="assignments-heading" className="space-y-4">
            <div>
              <h2
                id="assignments-heading"
                className="text-xl font-bold text-gray-800"
              >
                Assignments
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Track what’s due and what you’ve completed.
              </p>
            </div>
            <div className="divide-y divide-gray-100 rounded-2xl bg-white px-5 shadow-md">
              {studentData.assignments.map((assignment) => {
                const statusStyles = {
                  pending: "bg-amber-50 text-amber-700",
                  completed: "bg-emerald-50 text-emerald-700",
                  "in-progress": "bg-blue-50 text-blue-700",
                };

                return (
                  <article
                    key={assignment.title}
                    className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {assignment.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {assignment.course.trim()} · Due{" "}
                        <time dateTime={assignment.date}>
                          {new Intl.DateTimeFormat("en", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }).format(new Date(`${assignment.date}T12:00:00`))}
                        </time>
                      </p>
                    </div>
                    <span
                      className={`w-fit rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                        statusStyles[assignment.status] ??
                        "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {assignment.status.replace("-", " ")}
                    </span>
                  </article>
                );
              })}
            </div>
          </section>
          )}

          {(activeView === "overview" || activeView === "announcements") && (
          <section aria-labelledby="announcements-heading" className="space-y-4">
            <div>
              <h2
                id="announcements-heading"
                className="text-xl font-bold text-gray-800"
              >
                Announcements
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                The latest updates from your learning platform.
              </p>
            </div>
            <div className="relative space-y-3 before:absolute before:bottom-5 before:left-3 before:top-5 before:w-px before:bg-orange-200">
              {studentData.announcements.map((announcement) => (
                <article
                  key={announcement.title}
                  className="relative ml-3 rounded-2xl border border-white bg-white/80 p-5 pl-7 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.18rem] top-6 h-3 w-3 rounded-full border-2 border-orange-50 bg-orange-500"
                  />
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold capitalize text-gray-800">
                      {announcement.title}
                    </h3>
                    <time className="shrink-0 text-xs text-gray-400">
                      {announcement.time}
                    </time>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    {announcement.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
          )}
        </div>
      </main>
      {/* End */}
    </div>
  );
};
