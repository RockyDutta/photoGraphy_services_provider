# 📸 Photography Services Provider Platform

A scalable, secure, and multi-service full-stack web platform designed to connect clients with professional photographers for service bookings, schedule management, portfolio showcases, and online transactions[cite: 1].

---

## 📑 Project Documentation

* 📥 **[View / Download System Architecture & ER Diagrams (PDF)](./Photography_Services_Provider_Slides.pdf)**[cite: 1]

---

## 🏗️ System Architecture

The application is architected around a decoupled backend ecosystem coordinated through an API Gateway, supporting role-based access control (RBAC), data encryption, and asynchronous third-party integrations[cite: 1]:

* **Client Layer**: Responsive interfaces for Web Browsers, Mobile Apps, Admin Panels, and Photographer Dashboards[cite: 1].
* **API Gateway**: Serves as the single entry point for API routing, load balancing, and request validation[cite: 1].
* **Core Microservices**:
  * **Authentication Service**: User authentication, role assignment, and JWT security[cite: 1].
  * **User & Booking Service**: Management of user profiles, booking lifecycles, and scheduling calendars[cite: 1].
  * **Service Management & Media Service**: Catalog of photography packages, pricing, and cloud media handling[cite: 1].
  * **Payment & Notification Service**: Payment workflows, dispute handling, and automated alerts[cite: 1].
* **Data & Storage Layer**:
  * **Primary Database**: MySQL with read-replica configuration for optimized read operations[cite: 1].
  * **Cloud Storage**: AWS S3 / Cloudinary for secure, high-resolution media hosting[cite: 1].
* **Third-Party Integrations**:
  * **Payment Gateways**: Razorpay and Stripe for online transaction processing[cite: 1].
  * **Communications**: SendGrid (Email) and Twilio (SMS / OTP) for real-time notifications[cite: 1].

---

## 🎯 Role-Based Features & Workflows

* **Clients**:
  * Register and authenticate via OTP[cite: 1].
  * Search photographers by location and browse categorized portfolios[cite: 1].
  * Book sessions, manage appointments, and complete payments[cite: 1].
  * Cancel bookings, request refunds, submit reviews, and raise disputes[cite: 1].

* **Photographers**:
  * Create and maintain professional profiles and portfolio galleries[cite: 1].
  * Define service packages, hourly pricing, and availability calendars[cite: 1].
  * Accept or reject incoming booking requests and track total earnings[cite: 1].

* **Administrators**:
  * Verify and approve photographer registrations[cite: 1].
  * Manage users, monitor active bookings, and generate analytical reports[cite: 1].
  * Resolve disputes, process refunds, and audit system activity logs[cite: 1].

---

## 🗄️ Database Design

The relational database enforces data integrity through foreign key constraints, supports non-destructive soft deletes (`is_deleted`), and provides administrative auditing[cite: 1]:

* **`USERS` / `PHOTOGRAPHERS` / `ADMIN`**: Multi-role user identity management, verification states, and role permissions[cite: 1].
* **`BOOKINGS` & `PACKAGES`**: Dynamic appointment tracking, duration, pricing tiers, and cancellation tracking[cite: 1].
* **`PAYMENTS` & `REFUNDS`**: Gateway transaction IDs, payment statuses, dispute resolution, and refund approvals[cite: 1].
* **`PORTFOLIO` & `REVIEWS`**: Image asset links and verified client ratings[cite: 1].
* **`SYSTEM_LOGS`**: Detailed audit trail recording admin actions, affected tables, and previous/updated value changes[cite: 1].

---

## 🚀 Quick Start (Local Setup)

To pull the latest repository changes (including the documentation PDF) and run the complete containerized stack:

```bash
# 1. Clone or pull the repository
git clone [https://github.com/RockyDutta/photoGraphy_services_provider.git](https://github.com/RockyDutta/photoGraphy_services_provider.git)
cd photoGraphy_services_provider
git pull origin main

# 2. Build and start all services via Docker Compose
docker-compose up --build

├── API_Gateway/                                # Central API routing and request handling
├── Backed_Java/                                # Java Spring backend service
├── Backend_Dotnet/                             # .NET backend service
├── Frontend/                                   # React client application
├── Python/GenAI_Python/                        # Python services and AI modules
├── Photography_Services_Provider_Slides.pdf    # Architecture & ER diagrams documentation
├── docker-compose.yml                          # Multi-container orchestration config
├── .gitignore                                  # Git ignore configuration
└── README.md                                   # Project documentation
