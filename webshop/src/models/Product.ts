export type Product = {
  "id": number,
  "title": string,
  "price": number,
  "description": string,
  "category": string,
  "image": string,
  "active": boolean,
  "rating": {
    "rate": number,
    "count": number
  }
}

// number, string, boolean