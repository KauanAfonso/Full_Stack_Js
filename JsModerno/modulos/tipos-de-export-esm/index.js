import { inline } from "./inline.js"; //a inline não pode trocar o nome da funcao somente com as
import defaultInline from "./inline.js"; //o export default so pode terum por arquivo
import { group } from "./non-inline.js";
import exportDefault from "./non-inline.js";

inline()
defaultInline()

group()
exportDefault()