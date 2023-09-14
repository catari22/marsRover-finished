import MoveRover from "../src/example";

describe('Mars Rover', () => {
    it('El Rover se mantiene en la posición original si no le damos órdenes', () => {
        const position = MoveRover([]);

        expect(position).toEqual([100, 100]);
    });

    it('El Rover se mueve al norte', () => {
        const position = MoveRover(['N']);

        expect(position).toEqual([101, 100]);
    });

    it('El Rover se mueve al sur', () => {
        const position = MoveRover(['S']);

        expect(position).toEqual([99, 100]);
    });

    it('El Rover se mueve al este', () => {
        const position = MoveRover(['E']);

        expect(position).toEqual([100, 101]);
    });

    it('El Rover se mueve al oeste', () => {
        const position = MoveRover(['W']);

        expect(position).toEqual([100, 99]);
    });

    it('El Rover realiza múltiples movimientos en la misma dirección', () => {
        const position = MoveRover(['E', 'E']);

        expect(position).toEqual([100, 102]);
    });

    it('El Rover realiza múltiples movimientos en diferentes direcciones', () => {
        const position = MoveRover(['E', 'N', 'N', 'E', 'E', 'S', 'S', 'S', 'S', 'W']);

        expect(position).toEqual([98, 102]);
    });
});
