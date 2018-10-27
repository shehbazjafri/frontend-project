describe('Find Duplicate', () => {
    var input;
    var output;
    it('finds 3 in [2,3,1,3]', () => {
        input = [2, 3, 1, 3];

        output = findDuplicate(input);

        expect(output).toEqual(3);
    });

    it('finds 3 in [3,4,2,3,1,5]', () => {
        input = [3,4,2,3,1,5];

        output = findDuplicate(input);

        expect(output).toEqual(3);
    });

    it('finds 2 in [3,1,2,2]', () => {
        input = [3,1,2,2];

        output = findDuplicate(input);

        expect(output).toEqual(2);
    });

    it('finds 1 in [4,3,1,1,4]', () => {
        input = [4,3,1,1,4];

        output = findDuplicate(input);

        expect(output).toEqual(1);
    });

    
    it('finds 4 in [2,4,4,2,1,5]', () => {
        input = [2,4,4,2,1,5];

        output = findDuplicate(input);

        expect(output).toEqual(4);
    });
    
    it('finds 3 in [6,4,1,3,3,4,2]', () => {
        input = [6,3,4,1,3,3,4,2];

        output = findDuplicate(input);

        expect(output).toEqual(3);
    });

    it('finds 3 in [3,1,5,2,3,4]', () => {
        input = [3,1,5,2,3,4];

        output = findDuplicate(input);

        expect(output).toEqual(3);
    });

    it('finds 1 in [1,1,2,2,3,5]', () => {
        input = [1,1,2,2,3,5];

        output = findDuplicate(input);

        expect(output).toEqual(1);
    });

});