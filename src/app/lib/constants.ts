export const Tag_Attack = "attack";
export const Tag_Block = "block";
export const Tag_Skill = "skill";
export const Tag_Power = "power";
export const Tag_Damage = "damage";

export const Default_Tag_List = [
    Tag_Attack, Tag_Skill, Tag_Power, Tag_Damage, Tag_Block
];

export const Ironclad_Data = 'IRONCLAD';
export const Ironclad_Text = 'Ironclad';
export const Silent_Data = 'THE_SILENT';
export const Silent_Text = 'Silent';
export const Defect_Data = 'DEFECT';
export const Defect_Text = 'Defect';
export const Watcher_Data = 'WATCHER';
export const Watcher_Text = 'Watcher';

export const Renamed_Chars: {[key: string]: string} = {
    [Ironclad_Data]: Ironclad_Text, 
    [Silent_Data]: Silent_Text,
    [Defect_Data]: Defect_Text,
    [Watcher_Data]: Watcher_Text,
};

export const Event_Data = '?';
export const Event_Text = 'Event';
export const Enemy_Data = 'M';
export const Enemy_Text = 'Monster';
export const Elite_Data = 'E';
export const Elite_Text = 'Elite';
export const Merchant_Data = '$';
export const Merchant_Text = 'Merchant';
export const Boss_Data = 'B';
export const Boss_Text = 'Boss';
export const Treasure_Data = 'T';
export const Treasure_Text = 'Treasure';
export const Rest_Data = 'R';
export const Rest_Text = 'Rest';
export const Boss_Treasure_Text = 'Boss Treasure';

export const Renamed_Floors: {[key: string]: string} = {
    [Event_Data]: Event_Text,
    [Enemy_Data]: Enemy_Text,
    [Elite_Data]: Elite_Text,
    [Merchant_Data]: Merchant_Text,
    [Boss_Data]: Boss_Text,
    [Treasure_Data]: Treasure_Text,
    [Rest_Data]: Rest_Text,
    null: Boss_Treasure_Text,
}

// Chartjs constants
export const BarChart_Colors = [
    "red",
    "green",
    "blue",
    "purple"
]

export const FloorChart_Colors = [
    "#fff153",
    "#dfdfdf",
    "#66ecff",
    '#ba8c3d',
    "#e681ff",
    "#97664a",
    "#ff9035",
    "#886495",
]

export const Links = [
    { name: 'Dashboard', href: '/', },
    { name: 'Card Library', href: '/library/card', },
    { name: 'Relic Library', href: '/library/relic', },
]

export const Skip = "SKIP"

export const Character_Chosen = 'character_chosen'
export const Timestamp = 'timestamp'
export const Playtime = 'playtime'

export const Ascending = 'Ascending'
export const Descending = 'Descending'
export const Victory = 'Victory'