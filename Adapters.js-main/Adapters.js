'use strict';
class Adapters {
    getInfo() {
        return {
            id: 'Adapters',
            name: 'Adapters',
            blocks: [
                {
                    opcode: 'myBooleanBlock',
                    blockType: Scratch.BlockType.BOOLEAN,
                    // Replaced descriptive text with a single space to hide the name
                    text: ' [INPUT_VALUE]',
                    arguments: {
                        INPUT_VALUE: {
                            type: Scratch.ArgumentType.BOOLEAN,
                            defaultValue: true
                        }
                    }
                },
                {
                    opcode: 'myInputBlock',
                    blockType: Scratch.BlockType.REPORTER,
                    // Replaced descriptive text with a single space to hide the name
                    text: ' [TEXT_INPUT]',
                    arguments: {
                        TEXT_INPUT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'apple'
                        }
                    }
                },
                {
                    opcode: 'myReporterToBooleanBlock',
                    blockType: Scratch.BlockType.BOOLEAN,
                    // This block still has text as requested by the original design
                    text: 'is [REPORTER_INPUT] true?',
                    arguments: {
                        REPORTER_INPUT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'true'
                        }
                    }
                },
                // New block added to return the desired string format
                {
                    opcode: 'displayEnteredText',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'display entered: [INPUT_TEXT]',
                    arguments: {
                        INPUT_TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'apple'
                        }
                    }
                }
            ]
        };
    }
    // --- Implement the methods for the opcodes ---
    /**
     * Implementation of the boolean block.
     * @param {object} args - Arguments passed from the block.
     * @param {boolean} args.INPUT_VALUE - The boolean value from the block input.
     * @returns {boolean}
     */
    myBooleanBlock(args) {
        return args.INPUT_VALUE;
    }

    /**
     * Implementation of the reporter block with text input.
     * @param {object} args - Arguments passed from the block.
     * @param {string} args.TEXT_INPUT - The string value from the block input.
     * @returns {string}
     */
    myInputBlock(args) {
        return args.TEXT_INPUT;
    }

    /**
     * Implementation of the boolean block that takes a reporter input and checks if it's 'true'.
     * @param {object} args - Arguments passed from the block.
     * @param {string} args.REPORTER_INPUT - The string value from the reporter input.
     * @returns {boolean}
     */
    myReporterToBooleanBlock(args) {
        // Coerce the input string to lowercase and check for equality with 'true'
        // This handles inputs like "true", "True", etc.
        return typeof args.REPORTER_INPUT === 'string' && args.REPORTER_INPUT.toLowerCase() === 'true';
    }

    /**
     * Implementation of the new block to format and return the input string.
     * @param {object} args - Arguments passed from the block.
     * @param {string} args.INPUT_TEXT - The string value from the block input.
     * @returns {string}
     */
    displayEnteredText(args) {
        // Return the string formatted as "(You entered: [INPUT_TEXT])"
        return `(You entered: ${args.INPUT_TEXT})`;
    }
}

// Check if 'Scratch' is defined and register the extension
if (typeof Scratch !== 'undefined') {
    Scratch.extensions.register(new Adapters());
}
