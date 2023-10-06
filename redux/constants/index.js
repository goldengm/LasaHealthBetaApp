//  Track actions
export const ADD_CUSTOM_SYMPTOM = 'Add_Custom_Symptom';
export const REMOVE_CUSTOM_SYMPTOM = 'Remove_Custom_Symptom';
export const ADD_TRACKING_SYMPTOM = 'Add_Tracking_Symptom';
export const REMOVE_TRACKING_SYMPTOM = 'Remove_Tracking_Symptom';
export const ADD_SYMPTOM_LOG = 'Add_Symptom_log';
export const REMOVE_SYMPTOM_LOG = 'Remove_Symptom_log';
export const ADD_SYMPTOM_LOG_FROM_STAGING = 'Add_Symptom_log_from_staging';
export const RECOVER_LEFTOVER_TRACK_LOG_STAGING =
  'Recover_leftover_track_log_staging';
export const ADD_SYMPTOM_LOG_STAGING_TIMESTAMP =
  'Add_Symptom_log_staging_timestamp';
export const SET_SYMPTOM_LOG_STAGING_TO_DATE =
  'Set_Symptom_log_staging_to_date';
export const RESET_SYMPTOM_LOG_STAGING_TO_DEFAULT =
  'Reset_symptom_log_staging_to_default';
export const ADD_SYMPTOM_LOG_STAGING = 'Add_Symptom_log_staging';
export const REMOVE_SYMPTOM_LOG_STAGING = 'Remove_Symptom_log_staging';
export const ADD_SYMPTOM_LOG_STAGING_SEVERITY =
  'Add_symptom_log_severity_staging';
export const ADD_SYMPTOM_LOG_STAGING_OPTION = 'Add_symptom_log_option_staging';
export const ADD_SYMPTOM_LOG_STAGING_NUMBER = 'Add_symptom_log_number_staging';
export const ADD_SYMPTOM_LOG_STAGING_NOTE = 'Add_symptom_log_note_staging';
export const ADD_SYMPTOM_GENERAL_LOG_STAGING_NOTE =
  'Add_symptom_general_log_staging_note';
//  User Analytics actions
export const REGENERATE_MENSTRUAL_CYCLE = 'Regenerate_menstrual_cycle';
export const REGENERATE_CHART_STATS = 'Regenerate_chart_stats';
export const UPDATE_USER_MENSTRUATION_ONBOARDING =
  'Update_user_menstruation_onboarding';
export const UPDATE_STATS_BEGIN_RANGE_TS = 'Update_stats_begin_range_ts';
export const UPDATE_CUSTOM_CHART1_SYMP = 'Update_custom_chart1_symp';
export const UPDATE_CUSTOM_CHART1_METRIC = 'Update_custom_chart1_metric';
export const RESET_USER_ANALYTICS_INTERACTIVE_PARAMS =
  'Reset_user_analytics_interactive_params';
export const UPDATE_CHART3_SYMP = 'Update_chart3_symp';
export const UPDATE_CHART4_SYMP = 'Update_chart4_symp';
export const UPDATE_CHART5_SYMP1 = 'Update_chart5_symp1';
export const UPDATE_CHART5_SYMP2 = 'Update_chart5_symp2';

//  User Profile actions
export const CREATE_USER_PROFILE = 'Create_user_profile';
export const SET_ACTIVE_GOALS = 'Set_active_goals';
export const SET_TODO_STATUS = 'Set_todo_status';
export const ADD_TODO_ITEM = 'Add_todo_item';
export const SET_APP_INTRO_TUTORIAL_COMPLETE =
  'Set_app_intro_tutorial_complete';
export const SET_INTRO_HEALTH_SURVEY = 'Set_intro_health_survey';
export const ADD_FOLLOW_UP_HEALTH_SURVEY = 'Add_follow_up_health_survey';
export const ADD_INTRO_HEALTH_SURVEY_ANSWER = 'Add_intro_health_survey_answer';
export const ADD_FOLLOW_UP_HEALTH_SURVEY_ANSWER =
  'Add_follow_up_health_survey_answer';

// Onboarding actions
export const UPDATE_ONBOARDING_HEALTH_PROFILE =
  'Update_Onboarding_Health_Profile';
export const UPDATE_ONBOARDING_GOALS = 'Update_Onboarding_Goals';
export const UPDATE_ONBOARDING_VALUE = 'Update_Onboarding_Value';
export const ADD_ONBOARDING_CONDITION = 'Add_Onboarding_Condition';
export const REMOVE_ONBOARDING_CONDITION = 'Remove_onboarding_condition';
export const SET_ONBOARDING_PROGRESS = 'Set_onboarding_progress';

//  User Public Profile Actions
export const UPDATE_CHATROOM = 'Update_chatroom';
export const DELETE_CHATROOM = 'Delete_chatroom';
export const UPDATE_LAST_MESSAGE_CHATROOM = 'Update_last_message_chatroom';

export const UPDATE_USER_PUBLIC_PROFILE = 'Update_user_public_profile';
export const UPDATE_USER_PUBLIC_PROFILE_NAME =
  'Update_user_public_profile_name';
export const UPDATE_USER_PUBLIC_PROFILE_AVATAR =
  'Update_user_public_profile_avatar';
export const UPDATE_USER_PUBLIC_PROFILE_LOCATION =
  'Update_user_public_profile_location';
export const UPDATE_USER_PUBLIC_PROFILE_DESCRIPTION =
  'Update_user_public_profile_description';
export const ADD_USER_PUBLIC_PROFILE_CONDITION =
  'Add_user_public_profile_condition';
export const REMOVE_USER_PUBLIC_PROFILE_CONDITION =
  'Remove_user_public_profile_condition';

//  Learn actions
export const ADD_FAVORITE_LEARN = 'Add_Favorite_Learn';
export const REMOVE_FAVORITE_LEARN = 'Remove_Favorite_Learn';
export const ADD_RECOMMENDED_LEARN = 'Add_recommended_Learn';
export const REMOVE_RECOMMENDED_LEARN = 'Remove_recommended_Learn';

//  Learn Course actions
export const INITIALIZE_ENDO101_COURSE = 'Initialize_endo101_course';
export const RESET_ENDO101_WEEK1_PROGRESS = 'Reset_endo101_week1_progress';
export const UPDATE_ENDO101_PROGRESS = 'Update_endo101_progress';
export const UPDATE_ENDO101_WEEK1_PROGRESS = 'Update_endo101_week1_progress';
export const UPDATE_ENDO101_WEEK1_NUMMODULES =
  'Update_endo101_week1_nummodules';
// questions
export const UPDATE_ENDO101_WEEK1_MODULE2_Q1 =
  'Update_endo101_week1_module2_q1';
export const UPDATE_ENDO101_WEEK1_MODULE2_Q2 =
  'Update_endo101_week1_module2_q2';
export const UPDATE_ENDO101_WEEK1_MODULE2_Q3 =
  'Update_endo101_week1_module2_q3';
export const UPDATE_ENDO101_WEEK1_MODULE3_Q1 =
  'Update_endo101_week1_module3_q1';
export const UPDATE_ENDO101_WEEK1_MODULE6_Q1 =
  'Update_endo101_week1_module6_q1';
export const UPDATE_ENDO101_WEEK1_MODULE6_Q2 =
  'Update_endo101_week1_module6_q2';
export const UPDATE_ENDO101_WEEK1_MODULE6_Q3 =
  'Update_endo101_week1_module6_q3';

export const UPDATE_ENDO101_WEEK1_MODULE6_Q4_1 =
  'Update_endo101_week1_module6_q4_1';
export const UPDATE_ENDO101_WEEK1_MODULE6_Q4_2 =
  'Update_endo101_week1_module6_q4_2';
export const UPDATE_ENDO101_WEEK1_MODULE6_Q4_3 =
  'Update_endo101_week1_module6_q4_3';
export const UPDATE_ENDO101_WEEK1_MODULE6_Q5_1 =
  'Update_endo101_week1_module6_q5_1';
export const UPDATE_ENDO101_WEEK1_MODULE6_Q5_2 =
  'Update_endo101_week1_module6_q5_2';
export const UPDATE_ENDO101_WEEK1_MODULE6_Q5_3 =
  'Update_endo101_week1_module6_q5_3';
export const UPDATE_ENDO101_WEEK1_MODULE6_Q6 =
  'Update_endo101_week1_module6_q6';

export const RESET_ENDO101_WEEK2_PROGRESS = 'Reset_endo101_week2_progress';
export const UPDATE_ENDO101_WEEK2_PROGRESS = 'Update_endo101_week2_progress';
export const UPDATE_ENDO101_WEEK2_NUMMODULES =
  'Update_endo101_week2_nummodules';
//  questions
export const UPDATE_ENDO101_WEEK2_MODULE1_Q1 =
  'Update_endo101_week2_module1_q1';
export const UPDATE_ENDO101_WEEK2_MODULE1_Q2 =
  'Update_endo101_week2_module1_q2';
export const UPDATE_ENDO101_WEEK2_MODULE1_Q3 =
  'Update_endo101_week2_module1_q3';
export const UPDATE_ENDO101_WEEK2_MODULE1_Q4 =
  'Update_endo101_week2_module1_q4';
export const UPDATE_ENDO101_WEEK2_MODULE6_Q1 =
  'Update_endo101_week2_module6_q1';
export const UPDATE_ENDO101_WEEK2_MODULE6_Q2 =
  'Update_endo101_week2_module6_q2';
export const UPDATE_ENDO101_WEEK2_MODULE6_Q3 =
  'Update_endo101_week2_module6_q3';
export const UPDATE_ENDO101_WEEK2_MODULE6_Q4 =
  'Update_endo101_week2_module6_q4';

export const UPDATE_ENDO101_WEEK2_MODULE6_Q5_1 =
  'Update_endo101_week2_module6_q5_1';
export const UPDATE_ENDO101_WEEK2_MODULE6_Q5_2 =
  'Update_endo101_week2_module6_q5_2';
export const UPDATE_ENDO101_WEEK2_MODULE6_Q5_3 =
  'Update_endo101_week2_module6_q5_3';
export const UPDATE_ENDO101_WEEK2_MODULE6_Q6_1 =
  'Update_endo101_week2_module6_q6_1';
export const UPDATE_ENDO101_WEEK2_MODULE6_Q6_2 =
  'Update_endo101_week2_module6_q6_2';
export const UPDATE_ENDO101_WEEK2_MODULE6_Q6_3 =
  'Update_endo101_week2_module6_q6_3';
export const UPDATE_ENDO101_WEEK2_MODULE6_Q7 =
  'Update_endo101_week2_module6_q7';

export const RESET_ENDO101_WEEK3_PROGRESS = 'Reset_endo101_week3_progress';
export const UPDATE_ENDO101_WEEK3_PROGRESS = 'Update_endo101_week3_progress';
export const UPDATE_ENDO101_WEEK3_NUMMODULES =
  'Update_endo101_week3_nummodules';
//  questions
export const UPDATE_ENDO101_WEEK3_MODULE1_Q1 =
  'Update_endo101_week3_module1_q1';
export const UPDATE_ENDO101_WEEK3_MODULE1_Q2 =
  'Update_endo101_week3_module1_q2';
export const UPDATE_ENDO101_WEEK3_MODULE1_Q3 =
  'Update_endo101_week3_module1_q3';
export const UPDATE_ENDO101_WEEK3_MODULE1_Q4 =
  'Update_endo101_week3_module1_q4';
export const UPDATE_ENDO101_WEEK3_MODULE2_Q1 =
  'Update_endo101_week3_module2_q1';
export const UPDATE_ENDO101_WEEK3_MODULE3_Q1 =
  'Update_endo101_week3_module3_q1';
export const UPDATE_ENDO101_WEEK3_MODULE4_Q1 =
  'Update_endo101_week3_module4_q1';
export const UPDATE_ENDO101_WEEK3_MODULE5_Q1 =
  'Update_endo101_week3_module5_q1';
export const UPDATE_ENDO101_WEEK3_MODULE5_Q2 =
  'Update_endo101_week3_module5_q2';
export const UPDATE_ENDO101_WEEK3_MODULE5_Q3 =
  'Update_endo101_week3_module5_q3';
export const UPDATE_ENDO101_WEEK3_MODULE7_Q1 =
  'Update_endo101_week3_module7_q1';
export const UPDATE_ENDO101_WEEK3_MODULE7_Q2 =
  'Update_endo101_week3_module7_q2';
export const UPDATE_ENDO101_WEEK3_MODULE7_Q3 =
  'Update_endo101_week3_module7_q3';
export const UPDATE_ENDO101_WEEK3_MODULE7_Q4 =
  'Update_endo101_week3_module7_q4';

export const UPDATE_ENDO101_WEEK3_MODULE7_Q5_1 =
  'Update_endo101_week3_module7_q5_1';
export const UPDATE_ENDO101_WEEK3_MODULE7_Q5_2 =
  'Update_endo101_week3_module7_q5_2';
export const UPDATE_ENDO101_WEEK3_MODULE7_Q5_3 =
  'Update_endo101_week3_module7_q5_3';
export const UPDATE_ENDO101_WEEK3_MODULE7_Q6_1 =
  'Update_endo101_week3_module7_q6_1';
export const UPDATE_ENDO101_WEEK3_MODULE7_Q6_2 =
  'Update_endo101_week3_module7_q6_2';
export const UPDATE_ENDO101_WEEK3_MODULE7_Q6_3 =
  'Update_endo101_week3_module7_q6_3';
export const UPDATE_ENDO101_WEEK3_MODULE7_Q7 =
  'Update_endo101_week3_module7_q7';

export const RESET_ENDO101_WEEK4_PROGRESS = 'Reset_endo101_week4_progress';
export const UPDATE_ENDO101_WEEK4_PROGRESS = 'Update_endo101_week4_progress';
export const UPDATE_ENDO101_WEEK4_NUMMODULES =
  'Update_endo101_week4_nummodules';
//  questions
export const UPDATE_ENDO101_WEEK4_MODULE1_Q1 =
  'Update_endo101_week4_module1_q1';
export const UPDATE_ENDO101_WEEK4_MODULE1_Q2 =
  'Update_endo101_week4_module1_q2';
export const UPDATE_ENDO101_WEEK4_MODULE1_Q3 =
  'Update_endo101_week4_module1_q3';
export const UPDATE_ENDO101_WEEK4_MODULE2_Q1 =
  'Update_endo101_week4_module2_q1';
export const UPDATE_ENDO101_WEEK4_MODULE7_Q1 =
  'Update_endo101_week4_module7_q1';
export const UPDATE_ENDO101_WEEK4_MODULE7_Q2 =
  'Update_endo101_week4_module7_q2';
export const UPDATE_ENDO101_WEEK4_MODULE7_Q3 =
  'Update_endo101_week4_module7_q3';
export const UPDATE_ENDO101_WEEK4_MODULE7_Q4 =
  'Update_endo101_week4_module7_q4';
export const UPDATE_ENDO101_WEEK4_MODULE7_Q5 =
  'Update_endo101_week4_module7_q5';
export const UPDATE_ENDO101_WEEK4_MODULE7_Q6 =
  'Update_endo101_week4_module7_q6';
export const UPDATE_ENDO101_WEEK4_MODULE7_Q7 =
  'Update_endo101_week4_module7_q7';
export const UPDATE_ENDO101_WEEK4_MODULE7_Q8 =
  'Update_endo101_week4_module7_q8';
export const UPDATE_ENDO101_WEEK4_MODULE8_Q1 =
  'Update_endo101_week4_module8_q1';
export const UPDATE_ENDO101_WEEK4_MODULE8_Q2 =
  'Update_endo101_week4_module8_q2';
export const UPDATE_ENDO101_WEEK4_MODULE8_Q3 =
  'Update_endo101_week4_module8_q3';
export const UPDATE_ENDO101_WEEK4_MODULE9_Q1 =
  'Update_endo101_week4_module9_q1';
export const UPDATE_ENDO101_WEEK4_MODULE9_Q2 =
  'Update_endo101_week4_module9_q2';
export const UPDATE_ENDO101_WEEK4_MODULE9_Q3 =
  'Update_endo101_week4_module9_q3';

export const UPDATE_ENDO101_WEEK4_MODULE9_Q4_1 =
  'Update_endo101_week4_module9_q4_1';
export const UPDATE_ENDO101_WEEK4_MODULE9_Q4_2 =
  'Update_endo101_week4_module9_q4_2';
export const UPDATE_ENDO101_WEEK4_MODULE9_Q4_3 =
  'Update_endo101_week4_module9_q4_3';
export const UPDATE_ENDO101_WEEK4_MODULE9_Q5_1 =
  'Update_endo101_week4_module9_q5_1';
export const UPDATE_ENDO101_WEEK4_MODULE9_Q5_2 =
  'Update_endo101_week4_module9_q5_2';
export const UPDATE_ENDO101_WEEK4_MODULE9_Q5_3 =
  'Update_endo101_week4_module9_q5_3';
export const UPDATE_ENDO101_WEEK4_MODULE9_Q6 =
  'Update_endo101_week4_module9_q6';

export const RESET_ENDO101_WEEK5_PROGRESS = 'Reset_endo101_week5_progress';
export const UPDATE_ENDO101_WEEK5_PROGRESS = 'Update_endo101_week5_progress';
export const UPDATE_ENDO101_WEEK5_NUMMODULES =
  'Update_endo101_week5_nummodules';
export const UPDATE_ENDO101_WEEK5_MODULE1_Q1 =
  'Update_endo101_week5_module1_q1';
export const UPDATE_ENDO101_WEEK5_MODULE1_Q2 =
  'Update_endo101_week5_module1_q2';
export const UPDATE_ENDO101_WEEK5_MODULE1_Q3 =
  'Update_endo101_week5_module1_q3';
export const UPDATE_ENDO101_WEEK5_MODULE1_Q4 =
  'Update_endo101_week5_module1_q4';
export const UPDATE_ENDO101_WEEK5_MODULE2_Q1 =
  'Update_endo101_week5_module2_q1';
export const UPDATE_ENDO101_WEEK5_MODULE3_Q1 =
  'Update_endo101_week5_module3_q1';
export const UPDATE_ENDO101_WEEK5_MODULE7_Q1 =
  'Update_endo101_week5_module7_q1';
export const UPDATE_ENDO101_WEEK5_MODULE7_Q2 =
  'Update_endo101_week5_module7_q2';
export const UPDATE_ENDO101_WEEK5_MODULE7_Q3 =
  'Update_endo101_week5_module7_q3';
export const UPDATE_ENDO101_WEEK5_MODULE7_Q4 =
  'Update_endo101_week5_module7_q4';
export const UPDATE_ENDO101_WEEK5_MODULE7_Q5 =
  'Update_endo101_week5_module7_q5';
export const UPDATE_ENDO101_WEEK5_MODULE7_Q6 =
  'Update_endo101_week5_module7_q6';
export const UPDATE_ENDO101_WEEK5_MODULE7_Q7 =
  'Update_endo101_week5_module7_q7';
export const UPDATE_ENDO101_WEEK5_MODULE7_Q8 =
  'Update_endo101_week5_module7_q8';
export const UPDATE_ENDO101_WEEK5_MODULE7_Q9 =
  'Update_endo101_week5_module7_q9';
export const UPDATE_ENDO101_WEEK5_MODULE7_Q10 =
  'Update_endo101_week5_module7_q10';
export const UPDATE_ENDO101_WEEK5_MODULE7_Q11 =
  'Update_endo101_week5_module7_q11';

// week 6

export const RESET_ENDO101_WEEK6_PROGRESS = 'Reset_endo101_week6_progress';
export const UPDATE_ENDO101_WEEK6_PROGRESS = 'Update_endo101_week6_progress';
export const UPDATE_ENDO101_WEEK6_NUMMODULES =
  'Update_endo101_week6_nummodules';
export const UPDATE_ENDO101_WEEK6_MODULE1_Q1 =
  'Update_endo101_week6_module1_q1';
export const UPDATE_ENDO101_WEEK6_MODULE1_Q2 =
  'Update_endo101_week6_module1_q2';
export const UPDATE_ENDO101_WEEK6_MODULE1_Q3 =
  'Update_endo101_week6_module1_q3';
export const UPDATE_ENDO101_WEEK6_MODULE1_Q4 =
  'Update_endo101_week6_module1_q4';
export const UPDATE_ENDO101_WEEK6_MODULE6_Q1 =
  'Update_endo101_week6_module6_q1';
export const UPDATE_ENDO101_WEEK6_MODULE6_Q2 =
  'Update_endo101_week6_module6_q2';
export const UPDATE_ENDO101_WEEK6_MODULE6_Q3 =
  'Update_endo101_week6_module6_q3';
export const UPDATE_ENDO101_WEEK6_MODULE6_Q4 =
  'Update_endo101_week6_module6_q4';
export const UPDATE_ENDO101_WEEK6_MODULE7_Q1 =
  'Update_endo101_week6_module7_q1';
export const UPDATE_ENDO101_WEEK6_MODULE7_Q2 =
  'Update_endo101_week6_module7_q2';
export const UPDATE_ENDO101_WEEK6_MODULE7_Q3 =
  'Update_endo101_week6_module7_q3';
export const UPDATE_ENDO101_WEEK6_MODULE7_Q4 =
  'Update_endo101_week6_module7_q4';
export const UPDATE_ENDO101_WEEK6_MODULE7_Q5 =
  'Update_endo101_week6_module7_q5';
export const UPDATE_ENDO101_WEEK6_MODULE7_Q6 =
  'Update_endo101_week6_module7_q6';
export const UPDATE_ENDO101_WEEK6_MODULE7_Q7 =
  'Update_endo101_week6_module7_q7';
export const UPDATE_ENDO101_WEEK6_MODULE7_Q8 =
  'Update_endo101_week6_module7_q8';
export const UPDATE_ENDO101_WEEK6_MODULE7_Q9 =
  'Update_endo101_week6_module7_q9';
export const UPDATE_ENDO101_WEEK6_MODULE7_Q10 =
  'Update_endo101_week6_module7_q10';
export const UPDATE_ENDO101_WEEK6_MODULE7_Q11 =
  'Update_endo101_week6_module7_q11';

//  week 7

export const RESET_ENDO101_WEEK7_PROGRESS = 'Reset_endo101_week7_progress';
export const UPDATE_ENDO101_WEEK7_PROGRESS = 'Update_endo101_week7_progress';
export const UPDATE_ENDO101_WEEK7_NUMMODULES =
  'Update_endo101_week7_nummodules';
export const UPDATE_ENDO101_WEEK7_MODULE1_Q1 =
  'Update_endo101_week7_module1_q1';
export const UPDATE_ENDO101_WEEK7_MODULE1_Q2 =
  'Update_endo101_week7_module1_q2';
export const UPDATE_ENDO101_WEEK7_MODULE1_Q3 =
  'Update_endo101_week7_module1_q3';
export const UPDATE_ENDO101_WEEK7_MODULE1_Q4 =
  'Update_endo101_week7_module1_q4';
export const UPDATE_ENDO101_WEEK7_MODULE3_Q1 =
  'Update_endo101_week7_module3_q1';
export const UPDATE_ENDO101_WEEK7_MODULE3_Q2 =
  'Update_endo101_week7_module3_q2';
export const UPDATE_ENDO101_WEEK7_MODULE3_Q3 =
  'Update_endo101_week7_module3_q3';
export const UPDATE_ENDO101_WEEK7_MODULE3_Q4 =
  'Update_endo101_week7_module3_q4';
export const UPDATE_ENDO101_WEEK7_MODULE4_Q1 =
  'Update_endo101_week7_module4_q1';
export const UPDATE_ENDO101_WEEK7_MODULE4_Q2 =
  'Update_endo101_week7_module4_q2';
export const UPDATE_ENDO101_WEEK7_MODULE4_Q3 =
  'Update_endo101_week7_module4_q3';
export const UPDATE_ENDO101_WEEK7_MODULE7_Q1 =
  'Update_endo101_week7_module7_q1';
export const UPDATE_ENDO101_WEEK7_MODULE7_Q2 =
  'Update_endo101_week7_module7_q2';
export const UPDATE_ENDO101_WEEK7_MODULE7_Q3 =
  'Update_endo101_week7_module7_q3';
export const UPDATE_ENDO101_WEEK7_MODULE7_Q4 =
  'Update_endo101_week7_module7_q4';
export const UPDATE_ENDO101_WEEK7_MODULE7_Q5 =
  'Update_endo101_week7_module7_q5';
export const UPDATE_ENDO101_WEEK7_MODULE7_Q6 =
  'Update_endo101_week7_module7_q6';
export const UPDATE_ENDO101_WEEK7_MODULE7_Q7 =
  'Update_endo101_week7_module7_q7';
export const UPDATE_ENDO101_WEEK7_MODULE7_Q8 =
  'Update_endo101_week7_module7_q8';
export const UPDATE_ENDO101_WEEK7_MODULE7_Q9 =
  'Update_endo101_week7_module7_q9';
export const UPDATE_ENDO101_WEEK7_MODULE7_Q10 =
  'Update_endo101_week7_module7_q10';
export const UPDATE_ENDO101_WEEK7_MODULE7_Q11 =
  'Update_endo101_week7_module7_q11';

export const RESET_ENDO101_WEEK8_PROGRESS = 'Reset_endo101_week8_progress';
export const UPDATE_ENDO101_WEEK8_PROGRESS = 'Update_endo101_week8_progress';
export const UPDATE_ENDO101_WEEK8_NUMMODULES =
  'Update_endo101_week8_nummodules';
export const UPDATE_ENDO101_WEEK8_MODULE1_Q1 =
  'Update_endo101_week8_module1_q1';
export const UPDATE_ENDO101_WEEK8_MODULE1_Q2 =
  'Update_endo101_week8_module1_q2';
export const UPDATE_ENDO101_WEEK8_MODULE1_Q3 =
  'Update_endo101_week8_module1_q3';
export const UPDATE_ENDO101_WEEK8_MODULE7_Q1 =
  'Update_endo101_week8_module7_q1';
export const UPDATE_ENDO101_WEEK8_MODULE7_Q2 =
  'Update_endo101_week8_module7_q2';
export const UPDATE_ENDO101_WEEK8_MODULE7_Q3 =
  'Update_endo101_week8_module7_q3';
export const UPDATE_ENDO101_WEEK8_MODULE7_Q4 =
  'Update_endo101_week8_module7_q4';
export const UPDATE_ENDO101_WEEK8_MODULE7_Q5 =
  'Update_endo101_week8_module7_q5';
export const UPDATE_ENDO101_WEEK8_MODULE7_Q6 =
  'Update_endo101_week8_module7_q6';
export const UPDATE_ENDO101_WEEK8_MODULE7_Q7 =
  'Update_endo101_week8_module7_q7';
export const UPDATE_ENDO101_WEEK8_MODULE7_Q8 =
  'Update_endo101_week8_module7_q8';
export const UPDATE_ENDO101_WEEK8_MODULE7_Q9 =
  'Update_endo101_week8_module7_q9';
export const UPDATE_ENDO101_WEEK8_MODULE7_Q10 =
  'Update_endo101_week8_module7_q10';

//  week 9

export const RESET_ENDO101_WEEK9_PROGRESS = 'Reset_endo101_week9_progress';
export const UPDATE_ENDO101_WEEK9_PROGRESS = 'Update_endo101_week9_progress';
export const UPDATE_ENDO101_WEEK9_NUMMODULES =
  'Update_endo101_week9_nummodules';
export const UPDATE_ENDO101_WEEK9_MODULE1_Q1 =
  'Update_endo101_week9_module1_q1';
export const UPDATE_ENDO101_WEEK9_MODULE1_Q2 =
  'Update_endo101_week9_module1_q2';
export const UPDATE_ENDO101_WEEK9_MODULE1_Q3 =
  'Update_endo101_week9_module1_q3';
export const UPDATE_ENDO101_WEEK9_MODULE1_Q4 =
  'Update_endo101_week9_module1_q4';
export const UPDATE_ENDO101_WEEK9_MODULE4_Q1 =
  'Update_endo101_week9_module4_q1';
export const UPDATE_ENDO101_WEEK9_MODULE4_Q2 =
  'Update_endo101_week9_module4_q2';
export const UPDATE_ENDO101_WEEK9_MODULE4_Q3 =
  'Update_endo101_week9_module4_q3';
export const UPDATE_ENDO101_WEEK9_MODULE6_Q1 =
  'Update_endo101_week9_module6_q1';
export const UPDATE_ENDO101_WEEK9_MODULE6_Q2 =
  'Update_endo101_week9_module6_q2';
export const UPDATE_ENDO101_WEEK9_MODULE6_Q3 =
  'Update_endo101_week9_module6_q3';
export const UPDATE_ENDO101_WEEK9_MODULE6_Q4 =
  'Update_endo101_week9_module6_q4';
export const UPDATE_ENDO101_WEEK9_MODULE6_Q5 =
  'Update_endo101_week9_module6_q5';
export const UPDATE_ENDO101_WEEK9_MODULE6_Q6 =
  'Update_endo101_week9_module6_q6';
export const UPDATE_ENDO101_WEEK9_MODULE6_Q7 =
  'Update_endo101_week9_module6_q7';
export const UPDATE_ENDO101_WEEK9_MODULE6_Q8 =
  'Update_endo101_week9_module6_q8';
export const UPDATE_ENDO101_WEEK9_MODULE6_Q9 =
  'Update_endo101_week9_module6_q9';
export const UPDATE_ENDO101_WEEK9_MODULE6_Q10 =
  'Update_endo101_week9_module6_q10';
export const UPDATE_ENDO101_WEEK9_MODULE6_Q11 =
  'Update_endo101_week9_module6_q11';

//  week 10

export const RESET_ENDO101_WEEK10_PROGRESS = 'Reset_endo101_week10_progress';
export const UPDATE_ENDO101_WEEK10_PROGRESS = 'Update_endo101_week10_progress';
export const UPDATE_ENDO101_WEEK10_NUMMODULES =
  'Update_endo101_week10_nummodules';
export const UPDATE_ENDO101_WEEK10_MODULE1_Q1 =
  'Update_endo101_week10_module1_q1';
export const UPDATE_ENDO101_WEEK10_MODULE1_Q2 =
  'Update_endo101_week10_module1_q2';
export const UPDATE_ENDO101_WEEK10_MODULE1_Q3 =
  'Update_endo101_week10_module1_q3';
export const UPDATE_ENDO101_WEEK10_MODULE1_Q4 =
  'Update_endo101_week10_module1_q4';
export const UPDATE_ENDO101_WEEK10_MODULE6_Q1 =
  'Update_endo101_week10_module6_q1';
export const UPDATE_ENDO101_WEEK10_MODULE6_Q2 =
  'Update_endo101_week10_module6_q2';
export const UPDATE_ENDO101_WEEK10_MODULE6_Q3 =
  'Update_endo101_week10_module6_q3';
export const UPDATE_ENDO101_WEEK10_MODULE6_Q4 =
  'Update_endo101_week10_module6_q4';
export const UPDATE_ENDO101_WEEK10_MODULE6_Q5 =
  'Update_endo101_week10_module6_q5';
export const UPDATE_ENDO101_WEEK10_MODULE6_Q6 =
  'Update_endo101_week10_module6_q6';
export const UPDATE_ENDO101_WEEK10_MODULE6_Q7 =
  'Update_endo101_week10_module6_q7';
export const UPDATE_ENDO101_WEEK10_MODULE6_Q8 =
  'Update_endo101_week10_module6_q8';
export const UPDATE_ENDO101_WEEK10_MODULE6_Q9 =
  'Update_endo101_week10_module6_q9';
export const UPDATE_ENDO101_WEEK10_MODULE6_Q10 =
  'Update_endo101_week10_module6_q10';
export const UPDATE_ENDO101_WEEK10_MODULE6_Q11 =
  'Update_endo101_week10_module6_q11';

//  week 11

export const RESET_ENDO101_WEEK11_PROGRESS = 'Reset_endo101_week11_progress';
export const UPDATE_ENDO101_WEEK11_PROGRESS = 'Update_endo101_week11_progress';
export const UPDATE_ENDO101_WEEK11_NUMMODULES =
  'Update_endo101_week11_nummodules';
export const UPDATE_ENDO101_WEEK11_MODULE1_Q1 =
  'Update_endo101_week11_module1_q1';
export const UPDATE_ENDO101_WEEK11_MODULE1_Q2 =
  'Update_endo101_week11_module1_q2';
export const UPDATE_ENDO101_WEEK11_MODULE1_Q3 =
  'Update_endo101_week11_module1_q3';
export const UPDATE_ENDO101_WEEK11_MODULE6_Q1 =
  'Update_endo101_week11_module6_q1';
export const UPDATE_ENDO101_WEEK11_MODULE6_Q2 =
  'Update_endo101_week11_module6_q2';
export const UPDATE_ENDO101_WEEK11_MODULE6_Q3 =
  'Update_endo101_week11_module6_q3';
export const UPDATE_ENDO101_WEEK11_MODULE6_Q4 =
  'Update_endo101_week11_module6_q4';
export const UPDATE_ENDO101_WEEK11_MODULE6_Q5 =
  'Update_endo101_week11_module6_q5';
export const UPDATE_ENDO101_WEEK11_MODULE6_Q6 =
  'Update_endo101_week11_module6_q6';
export const UPDATE_ENDO101_WEEK11_MODULE6_Q7 =
  'Update_endo101_week11_module6_q7';
export const UPDATE_ENDO101_WEEK11_MODULE6_Q8 =
  'Update_endo101_week11_module6_q8';
export const UPDATE_ENDO101_WEEK11_MODULE6_Q9 =
  'Update_endo101_week11_module6_q9';
export const UPDATE_ENDO101_WEEK11_MODULE6_Q10 =
  'Update_endo101_week11_module6_q10';

//  week 12

export const RESET_ENDO101_WEEK12_PROGRESS = 'Reset_endo101_week12_progress';
export const UPDATE_ENDO101_WEEK12_PROGRESS = 'Update_endo101_week12_progress';
export const UPDATE_ENDO101_WEEK12_NUMMODULES =
  'Update_endo101_week12_nummodules';
export const UPDATE_ENDO101_WEEK12_MODULE1_Q1 =
  'Update_endo101_week12_module1_q1';
export const UPDATE_ENDO101_WEEK12_MODULE1_Q2 =
  'Update_endo101_week12_module1_q2';
export const UPDATE_ENDO101_WEEK12_MODULE1_Q3 =
  'Update_endo101_week12_module1_q3';
export const UPDATE_ENDO101_WEEK12_MODULE1_Q4 =
  'Update_endo101_week12_module1_q4';
export const UPDATE_ENDO101_WEEK12_MODULE2_Q1 =
  'Update_endo101_week12_module2_q1';
export const UPDATE_ENDO101_WEEK12_MODULE2_Q2 =
  'Update_endo101_week12_module2_q2';
export const UPDATE_ENDO101_WEEK12_MODULE2_Q3 =
  'Update_endo101_week12_module2_q3';
export const UPDATE_ENDO101_WEEK12_MODULE2_Q4 =
  'Update_endo101_week12_module2_q4';
export const UPDATE_ENDO101_WEEK12_MODULE7_Q1 =
  'Update_endo101_week12_module7_q1';
export const UPDATE_ENDO101_WEEK12_MODULE7_Q2 =
  'Update_endo101_week12_module7_q2';
export const UPDATE_ENDO101_WEEK12_MODULE7_Q3 =
  'Update_endo101_week12_module7_q3';
export const UPDATE_ENDO101_WEEK12_MODULE7_Q4 =
  'Update_endo101_week12_module7_q4';
export const UPDATE_ENDO101_WEEK12_MODULE7_Q5 =
  'Update_endo101_week12_module7_q5';
export const UPDATE_ENDO101_WEEK12_MODULE7_Q6 =
  'Update_endo101_week12_module7_q6';
export const UPDATE_ENDO101_WEEK12_MODULE7_Q7 =
  'Update_endo101_week12_module7_q7';
export const UPDATE_ENDO101_WEEK12_MODULE7_Q8 =
  'Update_endo101_week12_module7_q8';
export const UPDATE_ENDO101_WEEK12_MODULE7_Q9 =
  'Update_endo101_week12_module7_q9';
export const UPDATE_ENDO101_WEEK12_MODULE7_Q10 =
  'Update_endo101_week12_module7_q10';
export const UPDATE_ENDO101_WEEK12_MODULE7_Q11 =
  'Update_endo101_week12_module7_q11';

//  connect actions
export const SET_CURRENT_CRID = 'Set_current_crid';
export const SET_CURRENT_AMIE_UID = 'Set_current_amie_uid';
export const SET_CURRENT_AMIE_PROFILE = 'Set_current_amie_profile';
export const ADD_PROPOSED_AMIE = 'Add_proposed_amie';
export const REMOVE_PROPOSED_AMIE = 'Remove_proposed_amie';
export const SET_REPORTED_UID = 'Set_reported_uid';
export const SET_AMIE_PUBLIC_PROFILES = 'Set_amie_public_profiles';
export const UPDATE_NUM_READ_CHATROOM = 'Update_num_read_chatroom';
export const SET_CHATROOMLIST = 'Set_chatroomlist';
export const SET_LAST_AMIE_PUBLIC_PROFILE_REFRESH_TS =
  'Set_last_amie_public_profile_refresh_ts';
export const SET_CACHED_QNA = 'Set_cached_qna';
export const SET_LAST_CACHED_QNA_REFRESH_TS = 'Set_last_cached_qna_refresh_ts';
export const SET_CACHED_FEED = 'Set_cached_feed';
export const UPDATE_CACHED_FEED_ITEM = 'Update_cached_feed_item';
export const ATTEMPT_CACHED_PUBLIC_PROFILE_UPDATE =
  'Attempt_cached_public_profile_update';
export const SET_LAST_CACHED_FEED_REFRESH_TS =
  'Set_last_cached_feed_refresh_ts';
export const SET_CACHED_FRIEND_REQUEST = 'Set_cached_friend_request';
export const SET_LAST_CACHED_FRIEND_REQUESTS_REFRESH_TS =
  'Set_last_cached_friend_requests_refresh_ts';
export const SET_LAST_CHATROOM_REFRESH_TS = 'Set_last_chatroom_refresh_ts';
export const ADD_CHATROOM = 'Add_chatroom';
export const SET_URGENT_FRIEND_STATUS_RECEIVED =
  'Set_urgent_friend_status_received';

export const SET_LOCAL_QNA_UPDATES = 'Set_local_qna_updates';
export const SET_LOCAL_FEED_UPDATES = 'Set_local_feed_updates';
export const ADD_QUESTION_TO_CACHED_QNA = 'Add_question_to_cached_qna';
export const RESET_LOCAL_QNA_UPDATES = 'Reset_local_qna_updates';
export const RESET_LOCAL_FEED_UPDATES = 'Reset_local_feed_updates';
export const ADD_STATUS_TO_CACHED_FEED = 'Add_status_to_cached_feed';
export const UPDATE_ALL_CHATROOMS = 'Update_all_chatrooms';
export const APPEND_TO_CACHED_FEED_ACTION = 'Append_to_cached_feed_action';
export const SET_LAST_FEED_SNAPSHOT_ACTION = 'Set_last_feed_snapshot_action';

export const UPDATE_USER_PUBLIC_PROFILE_UID = 'Update_user_public_profile_uid';

export const SET_CACHED_PUBLIC_PROFILES = 'Set_cached_public_profiles';
export const RESET_CACHED_PUBLIC_PROFILES = 'Reset_cached_public_profiles';
export const UPDATE_CACHED_PUBLIC_PROFILE = 'Update_cached_public_profiles';
export const UPDATE_PUBLIC_PROFILE_FOR_CACHED_CHATROOM =
  'Update_public_profile_for_cached_chatroom';

export const SET_FRIENDS_LIST = 'Set_friends_list';
export const REMOVE_FRIEND_FROM_FRIENDS_LIST =
  'Remove_friend_from_friends_list';
export const ADD_FRIEND_TO_FRIENDS_LIST = 'Add_friend_to_friends_list';
export const MARK_ALL_READ_FOR_CRID = 'Mark_all_read_for_crid';

//  Amie Chatbot actions
export const SET_CHATBOT_MESSAGES = 'Set_chatbot_messages';
export const LOG_CURRENT_CHATBOT_MESSAGES = 'Log_current_chatbot_messages';
export const CLEAR_CURRENT_CHATBOT_MESSAGES = 'Clear_current_chatbot_messages';
export const SET_CHATBOT_AVATAR_INDEX = 'Set_chatbot_avatar_index';

//  Garden actions
export const SAVE_GARDEN_STATE = 'Save_garden_state';

//  Server actions
export const SET_DB_OWNER_TO_CURRENT_AUTH_USER =
  'Set_db_owner_to_current_auth_user';
export const RESET_DB_TO_DEFAULT = 'Reset_db_to_default';
export const SYNC_TO_SERVER_SAVESTATE = 'Sync_to_server_savestate';
export const UPDATE_LAST_SERVER_SYNC_TIMESTAMP =
  'Update_last_server_sync_timestamp';
export const UPDATE_DEVICE_METADATA = 'Update_device_metadata';

//  Session actions
export const UPDATE_NOTIFICATIONS = 'Update_notifications';

//  Settings actions
export const SET_PUSH_NOTIFICATIONS_ENABLED = 'Set_push_notifications_enabled';

export const SET_ASSESSMENT_RESULTS = 'Set_assessment_results';
export const RESET_ASSESSMENT_RESULTS = 'Reset_assessment_results';
