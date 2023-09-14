function MoveRover(commands: string[]): [number, number] {
    let x = 100;
    let y = 100;

    for (const command of commands) {
        switch (command) {
            case 'N':
                x++;
                break;
            case 'S':
                x--;
                break;
            case 'E':
                y++;
                break;
            case 'W':
                y--;
                break;
            default:
                throw new Error(`Comando no válido: ${command}`);
        }
    }

    return [x, y];
}

export default MoveRover;