import sqlite3

conn = sqlite3.connect('student.db')
cursor = conn.cursor()


cursor.execute('''
    CREATE TABLE IF NOT EXISTS students(
               id INTEGER PRIMARY KEY,
               name TEXT NOT NULL,
               age INTEGER,
               grade TEXT)
               ''')

cursor.execute("INSERT INTO students VALUES (1,'Alice',20,'A')")
cursor.execute("INSERT INTO students VALUES (2'Ali',20,'B')")
cursor.execute("INSERT INTO students VALUES (3,'bob',20,'B')")


cursor.execute("SELECT * FROM students")
for row in cursor.fetchall():
    print(row)

cursor.execute("UPDATE students SET grade='A+' WHERE name='bob'")

cursor.execute("SELECT * FROM students")
for row in cursor.fetchall():
    print(row)

cursor.execute("DELETE  FROM students WHERE id=3")

# DELETE * FROM students;
# cursor.execute("DELETE FROM students")
# conn.commit()


conn.commit()
cursor.close()
conn.close()