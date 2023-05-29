import {
  Column,
  Entity,
  ManyToOne,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 120 })
  fullName: string;

  @Column({ length: 45 })
  email: string;

  @Column({ length: 14 })
  phoneNumber: string;

  @CreateDateColumn({ type: "date" })
  registerDate: Date;

  @ManyToOne(() => User, (user) => user.contacts, { onDelete: "CASCADE" })
  user: User;
}

export { Contact };
