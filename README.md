# GetMeACoffee

A full-stack web application built with Next.js that replicates the core functionalities of Patreon. This platform allows content creators to receive payments and support from their fans. Fans can make payments, leave messages, and view the top contributions.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

<!-- ## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font. -->

## Installation

1. Clone the repo

   ```sh
   git clone https://github.com/krishna3032004/GetMeACoffee-app-using-next.js.git

2. Install dependencies

   ```sh
   npm install mongoose
  
   npm install next-auth

   npm install razorpay

   npm install react-toastify


## Configuration

   To configure the project, create a .env.local file in the root of your project and add the following variables:

   ```bash
   Github_ID=your_OAuth_github_Id
   Github_SECRET=your_OAuth_github_Secret
   NEXT_PUBLIC_URL=http://localhost:3000/   
#    if you open in mobile use this url(url2) in paymentpage.js file and razorpay folder.
   NEXT_PUBLIC_URL2=your_computer_ipv4_address:3000 
   ```

## Usage

1. Start the development server
    ```sh
    npm run dev

2. Open your browser and visit http://localhost:3000

3. You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

4. This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Tech Stack

- React
- Nextjs
- Mongoose
- razorpay



## Features

- User Authentication:- Secure login and registration using NextAuth through Github.
- Profile Management:- Users can update their username ,profile pictures and cover photos.
- Payment Processing:- Integrated with Razorpay for handling payments.
- Dynamic Payment Options:- Fans can choose predefined payment amounts or enter custom amounts.
- Contribution Tracking:- Displays the top 10 contributions on the creator's profile.
- Responsive Design:- Optimized for both desktop and mobile devices.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
