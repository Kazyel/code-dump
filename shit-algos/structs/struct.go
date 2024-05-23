package structs

import "fmt"

type User struct {
	name    string
	age     int
	job     string
	havePet bool
}

var MateusMascarelo = User{
	name:    "Mateus",
	age:     21,
	job:     "Software Developer",
	havePet: false,
}

var Isabelle = User{
	name:    "Isabelle",
	age:     19,
	job:     "Psychologist",
	havePet: true,
}

func (user User) PrintUserData() string {
	petString := ""

	if user.havePet {
		petString = "I have a beautiful pet."
	} else {
		petString = "I don't have a pet."
	}

	return fmt.Sprintf("Hey! I'm %s, %d years old. Currently, I'm a %s and %s", user.name, user.age, user.job, petString)
}
