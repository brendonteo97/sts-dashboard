export const Bash = 'Ironclad_Bash';
export const I_Strike = 'Ironclad_Strike';
export const Armaments = 'Ironclad_Armaments';
export const Anger = 'Ironclad_Anger';
export const BodySlam = 'Ironclad_BodySlam';
export const I_Defend = 'Ironclad_Defend';

export const Ironclad_Cards = [Bash, I_Strike, Armaments, Anger, BodySlam, I_Defend];

export const Renamed_Chars: {[key: string]: string} = {
    'IRONCLAD': 'Ironclad', 
    'THE_SILENT': 'Silent',
    'DEFECT': 'Defect',
    'WATCHER': 'Watcher',
};

export const links = [
    { name: 'Dashboard', href: '/', },
    { name: 'Card Library', href: '/library', },
    { name: 'Runs', href: '/run', },
]