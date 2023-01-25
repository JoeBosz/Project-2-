Proposal

We would like to create a website that brings together a community of wine enthusiast and collectors alike. A place to expand your wine collection and pallets, while tracking your personal wine inventory.

I am favoring an certain type of wine but I would like to expand my collection and pallet

We have any collection . Collectors can search and add!

using Node.Js

### Sample Data

#### Class Collection

```json
[
  {
    "usertype": "Collector",
    "user": {
      "name": "Elias",
      "email": "elias@claimacademystl.com",
      "password": "password"
    },
    "Collection": [
      {
        "varietal": "Pinot Noir",
        "brand": "yellow tail",
        "taste": "cherry chocalate",
        "country/state": "Australia",
        "body": "medium-bodied",
        "winetype": "red wine"
      },
      {
        "varietal": "Cabernet Sauvigon",
        "brand": "Josh Cellars",
        "taste": "Black Cherry, Plum, Vanilla",
        "country/state": "California",
        "body": "medium-bodied",
        "winetype": "red wine"
      }
    ],
    "Your Orders": [
      {
        "Order#1": "Pinot Noir",
        "Quantity": "1 bottle",
        "Date Purchased": "1-24-2023"
      }
    ]
  }
]
```

#### Teachers Collection

```json
[{
      "name": "Elias",
      "email": "elias@claimacademystl.com"
      "password": "password"
    },
    {
      "name": "Manav",
      "email" : "manavm@visionwebsoft.com",
      "password" : "JSisAwesome"
      }
]
```

Table/Model:
Users:
-name
-email
-password
-orders: [orderIds]
-collections:[wineId]

Table/Model:
Wines:
id:
taste
price
brand
name

Table/Model:
Orders:
Id
products:
date:

### Mongoose Schema

````js
const wineCollection = new wineType.Schema({
  wine: { type: red wine , varietal: Pinot Noir,
        brand: yellow tail,
        taste: cherry chacolate,
        country: Austrila,
        body: medium-bodied,
        winetype: red wine },
});

const wineCollection = new wineType.Schema({
  wine: { varietal: Cabernet Sauvigon,
        brand: Josh Cellars,
        taste: Black Cherry, Plum, Vanilla,
        country/state: California,
        body: medium-bodied,
        winetype: red wine,
});

const UserSchema = new user.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const yourOrder = new orders.Schema({
  name: { Brand: Yellow Tail, varietal: Pinot Noir },
  date: { purchsedOn: 1-24-2003 }
});```

## MVP API Endpoints

### 🧑‍🏫

- [ ] `POST /api/collector/login` - Login a collector
- [ ] `POST /api/collector/logout` - Logout a collector
- [ ] `POST /api/collector/register` - Register a collector (admin only)
- [ ] `GET /api/collector` - Get all collectors (admin only)
- [ ] `GET /api/wine/` - Get wine
- [ ] `GET /api/collector/profile/` - get all currently logged in users data
- [ ] `PUT /api/collector/:collectorId` - Update a collector (collector updates their own, admin updates any)
- [ ] `DELETE /api/collecotr/:collectorId` - Delete a collector (admin only)









````
