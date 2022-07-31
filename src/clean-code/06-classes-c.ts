(() => {

    // Aplicar el principio de responsabilidad unica
    // Priorizar la composición frente a la herencia
    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }

    }
    interface UserProps {
        email: string;
        role: string;
    }

    class User {
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({ email, role }: UserProps) {
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name, gender, birthdate, email, role, lastOpenFolder, workingDirectory
        }: UserSettingsProps) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastOpenFolder });
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'vidal179@gmail.com',
        role: 'Admin',
        name: 'Daniel',
        gender: 'M',
        birthdate: new Date('1995-03-14')
    });

    console.log({ userSettings });
})()