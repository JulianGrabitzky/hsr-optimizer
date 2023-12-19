import {Stats} from "./constants";

const SIZE = 43

export const BufferPacker = {
  extractCharacter: (arr, offset) => { // Float32Array
    let i = 0
    offset = offset * SIZE
    return {
      id: arr[offset + i++], // 0
      [Constants.Stats.HP]:    arr[offset + i++],
      [Constants.Stats.ATK]:   arr[offset + i++],
      [Constants.Stats.DEF]:   arr[offset + i++],
      [Constants.Stats.SPD]:   arr[offset + i++],
      [Constants.Stats.CD]:    arr[offset + i++],
      [Constants.Stats.CR]:    arr[offset + i++],
      [Constants.Stats.EHR]:   arr[offset + i++],
      [Constants.Stats.RES]:   arr[offset + i++],
      [Constants.Stats.BE]:    arr[offset + i++],
      [Constants.Stats.ERR]:   arr[offset + i++],
      [Constants.Stats.OHB]:   arr[offset + i++],
      ED:    arr[offset + i++],
      CV:    arr[offset + i++],
      DMG:   arr[offset + i++],
      MCD:   arr[offset + i++],
      EHP:   arr[offset + i++],
      BASIC: arr[offset + i++],
      SKILL: arr[offset + i++],
      ULT:   arr[offset + i++],
      FUA:   arr[offset + i++], // 20
      xHP:  arr[offset + i++],
      xATK: arr[offset + i++],
      xDEF: arr[offset + i++],
      xSPD: arr[offset + i++],
      xCR:  arr[offset + i++],
      xCD:  arr[offset + i++],
      xEHR: arr[offset + i++],
      xRES: arr[offset + i++],
      xBE:  arr[offset + i++],
      xERR: arr[offset + i++],
      xOHB: arr[offset + i++],
      xED:  arr[offset + i++], // 32
    }
  },

  extractArrayToResults: (arr, length, results) => {
    for (let i = 0; i < length; i++) {
      if (arr[i * SIZE + 1]) {
        results.push(BufferPacker.extractCharacter(arr, i))
      }
    }
  },

  packCharacter: (arr, offset, character) => {
    let i = 0
    arr[offset * SIZE + i++] = character.id
    arr[offset * SIZE + i++] = character[Stats.HP]
    arr[offset * SIZE + i++] = character[Stats.ATK]
    arr[offset * SIZE + i++] = character[Stats.DEF]
    arr[offset * SIZE + i++] = character[Stats.SPD]
    arr[offset * SIZE + i++] = character[Stats.CD]
    arr[offset * SIZE + i++] = character[Stats.CR]
    arr[offset * SIZE + i++] = character[Stats.EHR]
    arr[offset * SIZE + i++] = character[Stats.RES]
    arr[offset * SIZE + i++] = character[Stats.BE]
    arr[offset * SIZE + i++] = character[Stats.ERR]
    arr[offset * SIZE + i++] = character[Stats.OHB]
    arr[offset * SIZE + i++] = character.ED
    arr[offset * SIZE + i++] = character.CV
    arr[offset * SIZE + i++] = character.DMG
    arr[offset * SIZE + i++] = character.MCD
    arr[offset * SIZE + i++] = character.EHP
    arr[offset * SIZE + i++] = character.BASIC
    arr[offset * SIZE + i++] = character.SKILL
    arr[offset * SIZE + i++] = character.ULT
    arr[offset * SIZE + i++] = character.FUA
    arr[offset * SIZE + i++] = character.x[Stats.HP]
    arr[offset * SIZE + i++] = character.x[Stats.ATK]
    arr[offset * SIZE + i++] = character.x[Stats.DEF]
    arr[offset * SIZE + i++] = character.x[Stats.SPD]
    arr[offset * SIZE + i++] = character.x[Stats.CR]
    arr[offset * SIZE + i++] = character.x[Stats.CD]
    arr[offset * SIZE + i++] = character.x[Stats.EHR]
    arr[offset * SIZE + i++] = character.x[Stats.RES]
    arr[offset * SIZE + i++] = character.x[Stats.BE]
    arr[offset * SIZE + i++] = character.x[Stats.ERR]
    arr[offset * SIZE + i++] = character.x[Stats.OHB]
    arr[offset * SIZE + i++] = character.x.ED
  }
}