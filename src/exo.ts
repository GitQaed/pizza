const a: number = 10;
const b: number = 5;

console.log(`a:${a} - b:${b}`);

const note: number[] = [a, b, 12];

console.table(note);

const ordonnerNotes = (tableauDeNotes: number[]) => {
  let noteSort = note.sort((a, b) => a - b);
  return noteSort;
};

console.table(ordonnerNotes(note));

type Student = {
  nom: string;
  prenom: string;
  age: number;
  notes: number[];
};

const Student = {
  nom: "Doe",
  prenom: "john",
  age: 45,
  notes: note,
};

console.table(Student);

const AfficherStudent = (student: Student) => {
  return `Bonjour ${student.prenom} ${student.nom}, vous avez ${student.age} ans `;
};

console.log(AfficherStudent(Student));

const AfficheNote = (tableauNotes: number[]) => {
  tableauNotes.forEach((valeur, index) => {
    console.log(`Note n°${index}: ${valeur} / 20`);
  });
};
AfficheNote(note);

const moyenne = (tableauDeNotes: number[]) => {
  let total = 0;
  for (let i = 0; i < tableauDeNotes.length; i++) {
    total += tableauDeNotes[i];
  }
  return total / tableauDeNotes.length;
};

console.log(`la moyenne des notes est: ${moyenne(note)}`);

type ProfPrincipal = {
  text?: string;
  objet?: {
    nom: string;
    prenom: string;
    matiere: string;
  };
};

type Identifiable<A> = {
  id: A;
};

type IdentifiableStudent = {
  id: Identifiable<number>;
  Student: Student;
};

const IdentifiableStudent = {
  id: 3,
  Student: {
    nom: "Amin",
    prenom: "Ali",
    age: 37,
    notes: [20, 20, 20],
  },
};
