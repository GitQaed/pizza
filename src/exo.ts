const a: number = 10;
const b: number = 5;

console.log(`a:${a} - b:${b}`);

const note: number[] = [a, b, 12];

console.table(note);

const ordonnerNotes = (tableauDeNotes: number[]): number[] => {
  let noteSort = tableauDeNotes.sort((a, b) => a - b);
  return noteSort;
};

console.table(ordonnerNotes(note));

type Student = {
  nom: string;
  prenom: string;
  age: number;
  notes: number[];
};

const student = {
  nom: "Doe",
  prenom: "john",
  age: 45,
  notes: note,
};

console.table(student);

const AfficherStudent = (student: Student): string => {
  return `Bonjour ${student.prenom} ${student.nom}, vous avez ${student.age} ans `;
};
console.log(AfficherStudent(student));

const AfficheNote = (tableauNotes: number[]): void => {
  tableauNotes.forEach((valeur, index) => {
    console.log(`Note n°${index + 1}: ${valeur} / 20`);
  });
};
AfficheNote(note);

const moyenne = (tableauDeNotes: number[]): number => {
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

type IdentifiableStudent = Identifiable<number> & Student;

const Etudiant: IdentifiableStudent = {
  id: 3,
  nom: "Amin",
  prenom: "Ali",
  age: 37,
  notes: [20, 20, 20],
};
