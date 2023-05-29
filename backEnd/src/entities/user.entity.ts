import {
  Column,
  Entity,
  OneToMany,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { Contact } from "./contact.entity";
import { getRounds, hashSync } from "bcryptjs";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 120 })
  fullName: string;

  @Column({ unique: true, length: 45 })
  email: string;

  @Column()
  password: string;

  @Column({ length: 14 })
  phoneNumber: string;

  @CreateDateColumn({ type: "date" })
  registerDate: Date;

  @OneToMany(() => Contact, (contact) => contact.user, { onDelete: "CASCADE" })
  contacts: Contact[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isHashed = getRounds(this.password);
    if (!isHashed) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export { User };
