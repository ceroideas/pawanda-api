
import { compareSync, hash } from 'bcrypt';

export async function hashpassword(plainPassword: string) {
    const ecryptedPassword = await hash(plainPassword, 10);
    return ecryptedPassword;
}

export async function comparePassword(passwordPlain: string, hashPassword: string): Promise<boolean> {
    const comparedPasword = await compareSync(passwordPlain, hashPassword);
    return comparedPasword;
}