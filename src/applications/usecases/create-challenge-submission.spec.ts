import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { InMemoryChallengesRepository } from "../../tests/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../tests/repositories/in-memory-students-repository";
import { CreateChallengeSubmission } from "./create-challenge-submission"

describe('Create challenge submission use case', () => {
    it('should be able to create a new challenge submission',async  () => {

        const studentRepository = new InMemoryStudentsRepository()
        const challengeRepository = new InMemoryChallengesRepository()

        const student = Student.create({
            name: 'Ricardo',
            email: 'ricardo@gmail.com'
        })

        const challenge = Challenge.create({
            instructionUrl: "http://localhost",
            title: "Le challenge 001"
        })

        studentRepository.items.push(student)
        challengeRepository.items.push(challenge)

        const sut = new CreateChallengeSubmission(studentRepository, challengeRepository); // sut = system under test
        
        const response = await sut.execute({
            challengeId: challenge.id,
            studentId: student.id,
        })


        expect(response).toBeTruthy();


    })
})