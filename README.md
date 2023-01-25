## Data Sample and Schema

I am favoring an certain type of wine but I would like to expand my collection and pallet

We have any collection . Collectors can search and add!

using Node.Js

### Sample Data

#### Class Collection

```json
[
  {
    "name": "Full-stack Web Development",
    "description": "This is a full-stack web development class.",
    "teacher": {
      "name": "Elias",
      "email": "elias@claimacademystl.com"
      "password": "password"
    },
    "students": [
      {
        "name": "John Doe",
        "attendance": [
          {
            "date": "2020-01-01",
            "present": "Left Early"
          },
          {
            "date": "2020-01-02",
            "present": "Present"
          }
        ]
      },
      {
        "name": "Jane Doe",
        "attendance": [
          {
            "date": "2020-01-01",
            "present": "Late"
          },
          {
            "date": "2020-01-02",
            "present": "Excused Absence"
          }
        ]
      },
      {
        "name": "Jim Doe",
        "attendance": [
          {
            "date": "2020-01-01",
            "present": "Late"
          },
          {
            "date": "2020-01-02",
            "present": "Unexcused Absence"
          }
        ]
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
      "email: "manavm@visionwebsoft.com",
      "password: "JSisAwesome"
      }
]
```

### Mongoose Schema

````js
const AttendanceSchema = new mongoose.Schema({
  date: { type: String, required: true },
  present: { type: String, required: true }
});

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  attendance: [AttendanceSchema]
});

const TeacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const ClassSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  teacher: TeacherSchema,
  students: [StudentSchema]
});```

## MVP API Endpoints

### 🧑‍🏫

- [ ] `POST /api/teacher/login` - Login a teacher
- [ ] `POST /api/teacher/logout` - Logout a teacher
- [ ] `POST /api/teacher/register` - Register a teacher (admin only)
- [ ] `GET /api/teacher` - Get all teachers (admin only)
- [ ] `PUT /api/teacher/:teacherId` - Update a teacher (teacher updates their own, admin updates any)
- [ ] `DELETE /api/teacher/:teacherId` - Delete a teacher (admin only)

### Classes 🧑‍🎓

- [ ] `GET /api/classes` - Get all classes. Admin gets all. Teacher gets only their classes.
- [ ] `POST /api/classes` - Create a class (admin only)
- [ ] `PUT /api/classes/:classId` - Update a class (admin only). We can add students, teachers, updated the name and description. We can also update attendance.
- [ ] `DELETE /api/classes/:classId` - Delete a class (admin only)
This is using MongoDB, so not at all useful from that POV, but you can use MySQL workbench to design your schema and include the diagram.






````
