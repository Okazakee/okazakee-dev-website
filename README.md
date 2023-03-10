Personal Web Platform
=====================

This is a serverless web platform that showcases my personal information, projects, and interests on the internet. The platform consists of several pages, including Biography, Portfolio, and Blog, along with a CMS panel for managing website content.

Features
--------

*   NextJS framework for optimized Server Side Rendering (SSR) and Edge Functions
*   JWT authentication for secure user access to CMS panel
*   Amazon S3 for storing images and files
*   MongoDB Atlas for data storage and management
*   Integrated blog feature powered by Markdown

Getting Started
---------------

1.  Clone the repo: `git clone https://github.com/Okazakee/okazakee-dev-website.git`
2.  Install dependencies: `yarn install`
3.  Set environment variables:
    *   `ADMIN_USERNAME`
    *   `ADMIN_EMAIL`
    *   `ADMIN_PASSWORD`
    *   `API_ENDPOINT`
    *   `JWT_SECRET`
    *   `MONGODB_URI`
    *   `COLLECTION_ENV`
4.  Run development server: `yarn dev`

Usage
-----

Use `yarn build` to create a production build, then deploy using your preferred hosting service.

Use Vercel if you want to deploy accordingly to branches pushes.

Additionally, you can use the CMS panel at `/cms` to manage your website content.

Contributing
------------

This project is still in development and currently not open for contributions. However, feel free to reach out if you have any suggestions or feedback!

License
-------

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.