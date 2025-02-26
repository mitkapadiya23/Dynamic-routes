# Frontend - Dynamic Page Tree UI

This frontend project provides an interactive UI to display and manage a hierarchical page tree with dynamically generated URLs. Built with Angular 19.

## Setup Instructions

### Prerequisites

- Node.js >= 16
- Angular CLI

### Installation

1. Clone the repository:
   ```sh
   https://github.com/mitkapadiya23/dynamic-routes-frontend.git
   cd dynamic-routes-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   ng serve
   ```
4. Application will be available at `http://localhost:4200`

### Running Tests

```sh
ng test
```

## Assumptions

- Pages are retrieved from the backend in a nested JSON format.
- Each page contains a unique `slug` and `parent_id`.
- The frontend dynamically constructs URLs based on hierarchy.

## Solution Explanation

- The UI displays a collapsible tree structure for nested pages.
- Each page's URL is dynamically built using parent-child relationships (e.g., `4/8/10`).
- Users can expand/collapse nodes to navigate through the hierarchy.
- New pages can be added dynamically and reflected in the tree.
