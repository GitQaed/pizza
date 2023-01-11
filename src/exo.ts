const a: number = 10;
const b: number = 5;

console.log(`a:${a} - b:${b}`);

const note: number[] = [a, b, 12];

console.table(note);

// const ordonnerNotes = (tableauDeNotes: number[]): number[] => {
//   let newNotes = [...tableauDeNotes];
//   newNotes.sort((a, b) => a - b);
//   return newNotes;
// };

const ordonnerNotes = (notes: number[]) => [...notes].sort((a, b) => a - b);

console.table(ordonnerNotes(note));
// console.table(note)

type Student = {
  nom: string;
  prenom: string;
  age: number;
  notes: number[];
};

const john: Student = {
  nom: "Doe",
  prenom: "john",
  age: 45,
  notes: note,
};

console.table(john);

// const AfficherStudent = (student: Student): string =>
//   `Bonjour ${student.prenom} ${student.nom}, vous avez ${student.age} ans `;

const AfficherStudent = ({ nom, prenom, age }: Student): string =>
  `Bonjour ${prenom} ${nom}, vous avez ${age} ans `;

console.log(AfficherStudent(john));

const AfficheNote = (tableauNotes: number[]): void => {
  tableauNotes.forEach((valeur, index) => {
    console.log(`Note n°${index + 1}: ${valeur} / 20`);
  });
};
AfficheNote(note);

// const moyenne = (tableauDeNotes: number[]): number => {
//   let total = 0;
//   for (let i = 0; i < tableauDeNotes.length; i++) {
//     total += tableauDeNotes[i];
//   }
//   return total / tableauDeNotes.length;
// };

const moyenne = (notes: number[]): number =>
  notes.reduce((total, note) => total + note, 0) / notes.length;

console.log(`la moyenne des notes est: ${moyenne(note)}`);

// type ProfPrincipal = {
//   nom?: string;
//   identite?: {
//     nom: string;
//     prenom: string;
//     matiere: string;
//   };
// };

type ProfPrincipal =
  | string
  | {
      nom: string;
      prenom: string;
      matiere: string;
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
