# Laravel Nested Pages API & Frontend - Dynamic Page Tree UI

## Backend: Laravel Nested Pages API

### Setup Instructions

#### Prerequisites

- PHP 8.x
- Composer
- Laravel 11.x
- MySQL database

#### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/nested-pages-api.git
   cd nested-pages-api
   ```
2. Install dependencies:
   ```sh
   composer install
   ```
3. Create and configure the `.env` file:
   ```sh
   cp .env.example .env
   ```
   Update database credentials in `.env` file.
4. Run database migrations:
   ```sh
   php artisan migrate --seed
   ```
5. Generate application key:
   ```sh
   php artisan key:generate
   ```
6. Start the development server:
   ```sh
   php artisan serve
   ```

### API Endpoints

#### Pages API

##### Get all pages (with nested structure)

```http
GET /api/pages
```

##### Create a new page

```http
POST /api/pages
```

**Request Body:**

```json
{
  "title": "New Page",
  "slug": "new-page",
  "content": "Page content here",
  "parent_id": 4
}
```

##### Get a specific page by ID

```http
GET /api/pages/{id}
```

### Assumptions & Design Considerations

- Each page has a unique `slug`.
- Pages can have unlimited depth in the nested hierarchy.
- The API response includes parent-child relationships.
- Uses Laravel Eloquent relationships for tree structure.

## Frontend: Dynamic Page Tree UI

This frontend project provides an interactive UI to display and manage a hierarchical page tree with dynamically generated URLs. Built with Angular 19.

### Setup Instructions

#### Prerequisites

- Node.js >= 16
- Angular CLI

#### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/mitkapadiya23/dynamic-routes-frontend.git
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

### Assumptions

- Pages are retrieved from the backend in a nested JSON format.
- Each page contains a unique `slug` and `parent_id`.
- The frontend dynamically constructs URLs based on hierarchy.

### Solution Explanation

- The UI displays a collapsible tree structure for nested pages.
- Each page's URL is dynamically built using parent-child relationships (e.g., `4/8/10`).
- Users can expand/collapse nodes to navigate through the hierarchy.
- New pages can be added dynamically and reflected in the tree.
