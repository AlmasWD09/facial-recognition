# Facial Recognition

We handle the cleaning, you enjoy the calm. Reliable, detail-oriented service that gives you back your most valuable asset—time.

## 🚀 Features

### ✅ Individual User Features

#### **Authentication & Onboarding**
- User registration and login
- Email verification and OTP authentication
- Password reset functionality
- Personalized onboarding experience

#### **Core Features**
- **Home**: Landing page with platform overview
- **Services**: Browse all services and also get any service for your choice.
- **News**: Find news and also see details spacific news


#### **User Management**
- **Profile**: Personal information and preferences
- **account**: Account preferences and also updata user infomation
- **order history**: See all order information and order status 
- **payment history**: See all payment information and payment status 
- **Notifications**: Real-time updates and alerts

#### **Support & Information**
- **Contact Us**: Get in touch with the team
- **Privacy Policy**: All privacy policy read
- **Terms and Condition**: All terms & condition read
- **FAQ**: Frequently asked questions and help
-
### ✅ Admin Dashboard

#### **Dashboard & Management**
- **Dashboard Overview**: user dashboard with key metrics
- **Category Management**: Create, delete, update---> category and service
- **Quote Management**: show all quote informationa and admin can action any quote user
- **Users Management**: user information and admin can action
- **Order Management**: payment tracking 
- **News Management**: news add, delete and also update 
- **Subscriber List**: all subscribe user information show 

#### **Communication & Tools**
- **Settings**: Account and business settings
- **Notifications**: Client inquiries and system alerts


## 🛠️ Technology Stack
### **Frontend Framework**
- **Next.js 15.1.0** - React-based full-stack framework
- **React 19.2.2** - UI library for building user interfaces
- **TypeScript 5** - Type-safe JavaScript development

### **Styling & UI**
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS transformation tool
- **Shadcn ui  ^3.5.2** - Shadecn  UI design language
- **"lucide-react ^0.555.0** - Comprehensive icon library


### **Development Tools**
- **ESLint 9** - Code linting and quality assurance
- **TypeScript Compiler** - Type checking and compilation

### **Additional Libraries**
- **React OTP Input 3.1.1** - One-time password input component
- **Recharts 3.7.0** - Chart library for data visualization


## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/                 # Authentication pages
│   │   ├── login/
│   │   ├── register/
│   │   ├── forgot-password/
│   │   ├── reset-password/
│   │   ├── otp-verification/
│   ├── (landing)/           # landing user pages
│   │   ├── landing/
│   │   │   ├── account/
│   │   │   ├── billing-info/
│   │   │   ├── cart/
│   │   │   ├── contact-us/
│   │   │   ├── custom-quote-request/
│   │   │   ├── custom-quote-submit/
│   │   │   ├── faq/
│   │   │   ├── news/
│   │   │   ├── notification/
│   │   │   ├── payment/
│   │   │   ├── place-order/
│   │   │   ├── privacy-poolicy/
│   │   │   ├── questions/
│   │   │   ├── services/
│   │   │   ├── terms-and-condition/
│   │   │   ├── upload-files/
│   │   └── layout.tsx
│   ├── (admin)/             # admin pages
│   │   ├── admin/
│   │   │   ├── dashboard/
│   │   │   ├── category-management/
│   │   │   ├── custom_quote_management/
│   │   │   ├── delivery-management/
│   │   │   ├── news-management/
│   │   │   ├── notification/
│   │   │   ├── quote-management/
│   │   │   ├── user-management/
│   │   │   ├── subscriber-list/
│   │   │   ├── notifications/
│   │   │   └── settings/
│   │   └── layout.tsx
│   └── layout.tsx           # Root layout
├── components/
│   ├── common/               # Shared components
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── pageHeader.tsx
│   ├── model/ 
│   ├── resuable/ 
│   ├── sidebar/ 
│   ├── layouts/              # Layout components
│   ├── pages/               # Page-specific components
│   └── trainer/             # specific components
└── assets/                  # Static assets
```

## 🚀 Getting Started

### Projects
```bash

- npm i tailwind-merge
- npm i clsx
- npm i tailwind-scrollbar-hide

```bash


### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kistenmunro
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Features Implementation

### **Responsive Design**
- Mobile-first approach with Tailwind CSS
- Adaptive layouts for different screen sizes
- Touch-friendly interface components

### **Authentication Flow**
- Multi-step authentication process
- Email verification and OTP support
- Role-based access control

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 📞 Support

For support and inquiries:
- Visit our [Contact Us](/contact-us) page
- Check our [FAQ](/faq) section

---

**KistenMunro** - KistenMunro cleaning journeys through technology 🏋️‍♂️💪




<!-- Extra -->
<!-- Redux setup done --->
<!-- shadow-[0_4px_12px_rgba(255,208,125,0.25),0_-4px_8px_rgba(255,208,125,0.15)] -->
