var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
document.addEventListener('DOMContentLoaded', function () {
    var searchForm = document.getElementById('searchForm');
    var pokemonInput = document.getElementById('pokemonInput');
    var pokemonInfo = document.getElementById('pokemonInfo');
    searchForm.addEventListener('submit', function (event) { return __awaiter(_this, void 0, void 0, function () {
        var pokemonName, pokemonData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    pokemonName = pokemonInput.value.toLowerCase();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, getPokemonData(pokemonName)];
                case 2:
                    pokemonData = _a.sent();
                    displayPokemonInfo(pokemonData);
                    pokemonInput.classList.remove('warning'); // Elimina la clase de advertencia si se encuentra el Pokémon
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    alert('Error al obtener información del Pokémon. Asegúrate de que el nombre o ID sea válido.');
                    // Agrega la clase de advertencia si no se encuentra el Pokémon
                    pokemonInput.classList.add('warning');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    function getPokemonData(name) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://pokeapi.co/api/v2/pokemon/".concat(name))];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error('No se pudo obtener la información del Pokémon.');
                        }
                        return [2 /*return*/, response.json()];
                }
            });
        });
    }
    function displayPokemonInfo(data) {
        var name = data.name, id = data.id, types = data.types, stats = data.stats, moves = data.moves, sprites = data.sprites, species = data.species;
        pokemonInfo.innerHTML = "\n            <h2>".concat(name.toUpperCase(), " - #").concat(id, "</h2>\n            <img src=\"").concat(sprites.front_default, "\" alt=\"").concat(name, "\">\n            <p><strong>Tipo(s):</strong> ").concat(types.map(function (type) { return type.type.name; }).join(', '), "</p>\n            <p><strong>Estad\u00EDsticas:</strong> ").concat(stats.map(function (stat) { return "".concat(stat.stat.name, ": ").concat(stat.base_stat); }).join(', '), "</p>\n            <p><strong>Movimientos:</strong> ").concat(moves.map(function (move) { return move.move.name; }).join(', '), "</p>\n            <p><strong>Evoluci\u00F3n:</strong> ").concat(species.name, "</p>\n        ");
        pokemonInfo.classList.remove('hidden');
    }
});
