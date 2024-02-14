# Overview
You'll be building an application that can shorten a URL (e.g. like bit.ly
does).

There are 5 areas that need to be implemented. We have flagged each of those
areas with a `TODO` marker. 

> ### Note on the Framework
> This takehome is built on the [Next.js framework](https://nextjs.org/) , which simplifies spinning up a fullstack and performant
> Node + React experience. If you're not familar with the
> framework, no worries! You should only need standard Typescript and React
> familiarity to be successful in this takehome.

## You should build the following features:

1. Shorten a URL

- **Files to Update**: [lib/ui/ShortenUrlForm](lib/api/shortenUrl.ts), [lib/ui/ShortenUrlForm](lib/ui/ShortenUrlForm.tsx)
- Develop a feature to shorten a given URL.
- Design a user interface with a form for submitting URLs to be shortened.
- Display the shortened URL to the user post-submission.
- Implement logic to return an existing shortened URL if the same original URL is resubmitted.
- Ensure the shortened URL format follows http://localhost:3030/[a-zA-Z0-9]{6, 12}.

2. Resolve a Shortened URL

- **Files to Update**: [lib/api/resolveShortenedUrl](lib/api/resolveShortenedUrl.ts), [lib/ui/ResolveShortenedUrlForm](lib/ui/ResolveShortenedUrlForm.tsx)
- Implement logic in `resolveShortenedUrl` to retrieve the original URL from its shortened version.
- (The system already has the logic to handle redirecting any URL of the format http://localhost:3030/[a-zA-Z0-9]{6, 12} to the original URL, using the function defined in `resolvedShortenedUrl`).
- Handle cases where the shortened URL is not recognized, returning 404.
- Present a form to the user that allows them to submit an already-shortened URL in order to get the original URL it was generated from, using the `POST api/resolve` endpoint.
- After the form is submitted, show the resulting original URL to the user.

3. Display All Shortened URLs

- __File to Update__: [lib/api/getAllUrls](lib/api/getAllUrls)
- Implement a method to fetch and display all previously shortened URLs with their original counterparts.
- (The system has the ability to present these as a table with the columns: Original URL, Shortened URL)

## Considerations to Keep In Mind
- This takehome is intended to take about an hour, and should not exceed two
  hours. If you find yourself running beyond that timeframe, please reach out to us.
- Try to write code that you would be comfortable pushing to production (e.g.
  well-tested, handles edge-cases, readable to another developer).
  You are welcome to refactor our scaffolding if it better represents production-readiness.
- The UI of this takehome can be as basic or as complex as you'd
  like. We won't be judging any aesthetic choices you make.
- We have provided a SQlite database with a basic schema specified in
  [`connect.ts`](connect.ts); you are welcome to change that schema (or DB choice) to fit your needs or
  preferred architecture. 

# Getting Started

## Installation
> If you do not have node & npm configured on your machine, follow the setup
> guide [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
```bash
# install all dependencies & set up the sqlite database
npm i
```

## Dev Server
```bash
# starts the development server on port 3030
npm run dev
```

## Running Tests
```bash
# run tests through jest
npm run test
```

## Regenerating Database
```bash
# wipe and re-create the database using the schema defined in `connect.ts`
npm run db:reset
```
