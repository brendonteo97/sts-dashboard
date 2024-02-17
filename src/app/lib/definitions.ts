export type Run = {
    gold_per_floor: number[],
    floor_reached: number,
    playtime: number,
    items_purged: string[],
    score: number,
    play_id: string,
    local_time: string,
    is_ascension_mode: boolean,
    campfire_choices: CampfireChoice[],
    neow_cost: string,
    seed_source_timestamp: number,
    circlet_count: number,
    master_deck: string[],
    special_seed: number,
    relics: string[],
    potions_floor_usage: number[],
    damage_taken: DamageTaken[],
    seed_played: string,
    potions_obtained: Potion[],
    is_trial: boolean,
    path_per_floor: string[],
    character_chosen: string,
    items_purchased: string[],
    campfire_rested: number,
    item_purchase_floors: number[],
    current_hp_per_floor: number[],
    gold: number,
    neow_bonus: string,
    is_prod: boolean,
    is_daily: boolean,
    chose_seed: boolean,
    campfire_upgraded: number,
    win_rate: number,
    timestamp: number,
    path_taken: string[],
    build_version: string,
    purchased_purges: number,
    victory: boolean,
    max_hp_per_floor: number[],
    card_choices: CardChoice[],
    player_experience: number,
    relics_obtained: Relic[],
    event_choices: Event[],
    is_beta: boolean,
    boss_relics: BossRelic[],
    items_purged_floors: number[],
    is_endless: boolean,
    potions_floor_spawned: number[],
    ascension_level: number,
}

export type CampfireChoice = {
    floor: number,
    key: string,
}

export type DamageTaken = {
    damage: number,
    enemies: String,
    floor: number,
    turns: number,
}

export type Potion = {
    floor: number,
    key: String,
}

export type CardChoice = {
    not_picked: string[],
    picked: string,
    floor: number,
}

export type Relic = {
    floor: number,
    key: string,
}

export type BossRelic = {
    not_picked: string[],
    picked: string,
}

export type Event = {
    event_name: string,
    player_choice: string,
    floor: number,
    max_hp_gain: number | undefined,
    max_hp_loss: number | undefined,
    damage_healed: number | undefined,
    damage_taken: number | undefined,
    gold_gain: number | undefined,
    gold_loss: number | undefined,
    cards_obtained: string[] | undefined,
    cards_removed: string[] | undefined,
    cards_upgraded: string[] | undefined,
}

export type CardTags = {
    [character: string]: {
        [type: string]: {
            [card: string]: string[]
        }
    }
}

export type CardDetails = {
    [character: string]: {
        [type: string]: {
            [card: string]: {
                energy: number,
                description: string,
            }
        }
    }
}