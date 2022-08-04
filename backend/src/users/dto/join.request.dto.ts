import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
    @ApiProperty({
        example: 'jaecheolkim78@gmail.com',
        description: '이메일',
    })
    public email: string;

    @ApiProperty({
        example: 'lucas',
        description: '닉네임',
    })
    public nickname: string;

    @ApiProperty({
        example: 'nodejsbook',
        description: '비밀번호',
    })
    public password: string;
}